var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'attendance'
});

connection.connect((err)=>{
  if(err) return console.log(err.stack);
  console.log("Connection established successfully");
});

