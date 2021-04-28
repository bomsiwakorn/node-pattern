const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'Your host',
  user     : 'Your user',
  password : 'Your password',
  database : 'Your database'
});

module.exports = connection