var sql = require('mysql');
var query;

//variables to store form data
var t_name, s_name, t_email, s_email, t_pwd, s_pwd, s_regid, T_Submit_Btn, S_Submit_Btn;
t_name = document.getElementById("t_name");
s_name = document.getElementById('s_name');
t_email = document.getElementById("t_email");
s_email = document.getElementById('s_email');
t_pwd = document.getElementById("t_pwd");
s_pwd = document.getElementById('s_pwd');
s_regid = document.getElementById('s_regid');
T_Submit_Btn = document.getElementById('t_submit');
S_Submit_Btn = document.getElementById('s_submit');

//storing teacher info
T_Submit_Btn.addEventListener('click', function(){
  query = "insert into teacher(name, email, pwd)values('"+t_name.value+"','"+t_email.value+"','"+t_pwd.value+"');";
  conn.query(query, function(err, result){
    if(err){
      alert('Error');
      alert(err);
    }
    else{
      alert("Record inserted succesfully");
      console.log("Insertion Successful");
    }
  })
});

//storing student info
S_Submit_Btn.addEventListener('click', function(){
  query = "insert into STUDENT(name, email, password, reg_id)values('"+s_name.value+"','"+s_email.value+"','"
  +s_pwd.value+"','"+s_regid.value+"');";
  conn.query(query, function(err, result){
    if(err){
      alert('Error');
      alert(err);
    }
    else{
      alert("Record inserted succesfully");
      console.log("Insertion Successful");
    }
  })
});
