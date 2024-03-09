const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node_database'
});

connection.connect();

exports.getUsers = (callback) => {
  connection.query('SELECT * FROM users', (err, rows) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, rows);
  });
};

exports.addUser = (username, callback) => {
  connection.query('INSERT INTO users (username) VALUES (?)', [username], (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, result);
  });
};
