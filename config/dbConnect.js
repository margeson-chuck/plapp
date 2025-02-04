const mysql = require("mysql2/promise");
const dotenv = require('dotenv').config();

const mysqlConn = mysql.createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});

module.exports = mysqlConn;