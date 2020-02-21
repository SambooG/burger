const mysql = require('mysql');

const connectionConfig = process.env.JAWSDB_URL
  || {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'burgers_db'
  }


// mysql://d8qu9g04i28b27d1:gjypdznlij41q1tm@jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mrre835i5wv22dcz
const connection = mysql.createConnection(connectionConfig);

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  });
  module.exports = connection;