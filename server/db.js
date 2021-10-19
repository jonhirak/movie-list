const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
module.exports =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
});