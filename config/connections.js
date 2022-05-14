const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "employee_gen"
},
console.log('Connected to the Database!')
);

module.exports = db;
