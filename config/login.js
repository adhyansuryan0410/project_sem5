var mysql = require('mysql');
let winAdmin;
function gotoAdmin(){
  window.open("admin.html");
}

const LoginBtn = document.getElementById('btnlogin');

var pwd, loginid;

LoginBtn.addEventListener('click', function(event){
  loginid = document.getElementById("login_id").value;
  var sql = "SELECT * FROM admin_info WHERE username = ?";
  connection.query(sql, [loginid], function(err, result){
    if(err){
      alert(err);
    }
    pwd = result[0].password;
    if(pwd==document.getElementById("pwd").value){
      gotoAdmin();
    }
    else if(err) alert(err);
  });
  
})