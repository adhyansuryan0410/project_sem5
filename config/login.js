var mysql = require('mysql');
var database;

function gotoAdmin(){
  window.open("admin.html");
}
function gotoTeacher(){
  window.open("teacher.html");
}

const LoginBtn = document.getElementById('btnlogin');

var pwd, loginid, type, semester;

LoginBtn.addEventListener('click', function(event){
  loginid = document.getElementById("login_id").value;
  var sql = "SELECT * FROM admin_info WHERE username = ?";
  connection.query(sql, [loginid], function(err, result){
    if(err){
      alert(err);
    }
    pwd = result[0].password;
    type = result[0].type;
    semester = result[0].semester;
    if(pwd==document.getElementById("pwd").value && type=='admin'){
      gotoAdmin();
    }
    else if(pwd==document.getElementById("pwd").value && type=='student'){
      var name = result[0].name;
      window.open(""+name+".html");
    }
    else if(pwd==document.getElementById("pwd").value && type=='teacher'){
      
      gotoTeacher();
    }
    else if(err) alert(err);
  }) 
})