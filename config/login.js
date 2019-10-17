var mysql = require('mysql');
function gotoAdmin(){
  window.open("admin.html");
}
function gotoStudent(){
  window.open("student.html");
}
function gotoTeacher(){
  window.open("teacher.html");
}
const LoginBtn = document.getElementById('btnlogin');

var pwd, loginid, type;

LoginBtn.addEventListener('click', function(){
  loginid = document.getElementById("login_id").value;
  var sql = "SELECT * FROM admin_info WHERE username = ?";
  connection.query(sql, [loginid], function(err, result){
    if(err){
      alert(err);
    }
    pwd = result[0].password;
    type = result[0].type;
    if(pwd==document.getElementById("pwd").value && type=='admin'){
      gotoAdmin();
    }
    else if(pwd==document.getElementById("pwd").value && type=='student'){
      gotoStudent();
    }
    else if(pwd==document.getElementById("pwd").value && type=='teacher'){
      gotoTeacher();
    }
    else if(err) alert(err);
  });
  
})