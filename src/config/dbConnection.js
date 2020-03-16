const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'lero',
    password: 'lero',
    database: 'news_portal'
  });
}
