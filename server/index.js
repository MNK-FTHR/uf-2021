// packages
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
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
app.get('/', (req, res) => res.send('Hello World!'));
// routes
require("./app/routes/client.routes.js")(app);
// listen
const port = config.app.PORT;
app.listen(port, () => console.log(`http://localhost:${port}`))