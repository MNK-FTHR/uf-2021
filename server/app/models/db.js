const mysql = require("mysql2");
const config = require("../config/config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: config.db.HOST,
  user: config.db.USER,
  password: config.db.PASSWORD,
  database: config.db.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
