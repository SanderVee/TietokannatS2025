const mysql = require('mysql2');

const myConnectionString = "mysql://SanderV:hassunhauska@localhost:3306/kirjasto";
const connection = mysql.createPool(myConnectionString);

module.exports = connection;