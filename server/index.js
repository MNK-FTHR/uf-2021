// packages
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// applinks
const config = require('./app/config/config');
const app = express();
// app
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'));
// routes
require("./app/routes/client.routes.js")(app);
// listen
const port = config.app.PORT;
app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`))