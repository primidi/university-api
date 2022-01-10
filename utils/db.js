const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "university",
});

connection.connect((error) => {
  if (error) throw error;
  console.log(`Database connection succeed!`);
});

module.exports = connection;
