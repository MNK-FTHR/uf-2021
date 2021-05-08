// packages
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config()
//moveable
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require('jsonwebtoken');
// applinks
const config = require('./app/config/config');
const app = express();
// app
app.use(morgan('dev'))
app.use(
    cors({
      origin: [config.cors.AUTH] ,
      methods: config.cors.METHODS,
      credentials: true,
    })
  );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// LOGIN LOGIN LOGIN LOGIN
//movable?
const bcrypt = require("bcrypt");
const db = require("./app/models/db")
app.use(cookieParser());
app.use(
  session({
    key: "clientId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
const verifyJWT = (req, res, next) =>{
  const token = req.headers["x-access-token"]
  if(!token) {
    res.send("give the token !")
  }else{
    jwt.verify(token, "jwtSecret", (err, decoded)=>{
      if (err) {
        res.json({auth: false, message: "you failed to authenticate"})
      }else{
        req.clientId= decoded.id
        next()
      }
    })
  }
}
app.get('/isClientAuth', verifyJWT, (req, res)=>{
  res.send("you are autenticated")
})
app.get("/clients/login", (req, res) => {
  if (req.session.client) {
    res.send({ loggedIn: true, client: req.session.client });
  } else {
    res.send({ loggedIn: false });
  }
});
app.post('/clients/login', (req, res)=>{
    const email = req.body.email;
    const mot_de_passe = req.body.mot_de_passe;
    db.query(
        "SELECT * FROM clients WHERE email = ?;",
        email,
        (err, result) => {
          if (err) {
            console.log(err);
            res.send({ err: err });
          }
    
          if (result.length > 0) {
            bcrypt.compare(mot_de_passe, result[0].mot_de_passe, (error, response) => {
              if (response) {
                
                const id = result[0].id
                const token = jwt.sign({id}, "jwtSecret", {
                  expiresIn: 300
                })
                req.session.client = result;
                console.log(req.session.client);
                res.json({
                  auth: true,
                  token: token,
                  result: result
                });
              } else {
                console.log(res);
                res.json({
                  auth: false,
                  message: "wrong email or password"
                });
              }
            });
          } else {
            console.log(res);
            res.json({
              auth: false,
              message: "client don't exist"
            });
          }
        }
      );
})
//LOGIN LOGIN LOGIN LOGIN

app.get('/', (req, res) => res.send('Hello World!'));
// routes
require("./app/routes/client.routes.js")(app);
// listen
const port = config.app.PORT;
app.listen(port, () => console.log(`http://localhost:${port}`))