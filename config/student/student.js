var sql = require('mysql');
var query;

//connecting to database sem 5
var conn = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sem 5'
});

conn.connect((err)=>{
  if(err){
    console.log(err.stack);
    alert("Could not connect to database sem5");
  }
  console.log("Connection to database sem5 established successfully");
});