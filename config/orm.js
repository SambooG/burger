const connection = require("../config/connection.js");


function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      arr.push(key + "=" + value);
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
  // Object for all our SQL statement functions.
  const orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      /*
        table = 'burgers_table'
        cols = ['burger_name', 'devoured']
        vals = ['Good Burger', 'false']
        cb = function() {};
      */

      var queryString = "INSERT INTO " + table; // quertyString = insert into burgers_table

      queryString += " ("; // queryString = insert into burgers_table (
      queryString += cols.toString();// queryString = insert into burgers_table ( burger_name, devoured
      queryString += ") ";// queryString = insert into burgers_table ( burger_name, devoured)
      queryString += "VALUES (";// queryString = insert into burgers_table ( burger_name, devoured) Values(
      queryString += printQuestionMarks(vals.length);// queryString = insert into burgers_table ( burger_name, devoured) Values(?,?
      queryString += ") ";// queryString = insert into burgers_table ( burger_name, devoured) Values(?,?)
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };




module.exports = orm;

// selectAll()
// insertOne()
// updateOne()