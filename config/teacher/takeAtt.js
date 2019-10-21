var sem = document.getElementById('semSelect');
var date = document.getElementById('date');
var sub = document.getElementById('subject');
var absList = document.getElementById('absStud');
var totalAbs = document.getElementById('totalAbsStud');
var submit = document.getElementById('submit');
var mysql = require('mysql');
var sid;
function enableAll(){
  absList.disabled = false;
  totalAbs.disabled = false;
}

function addtoAbsList(){
  var roll = absList.value;
  totalAbs.append(roll+"\n");
  var day = date.value;  
  if (confirm('Are you sure you want to add'+roll+'to the absent\'s list?')){
    // Save it!
    var query1 = "select * from student where roll_no = "+roll+";";    
    conn.query(query1, function(err, result){
      if(err){
        alert('Error in select'+err);
      }
      else{
        sid=result[0].reg_id;
        var query2 = "insert into attend values('"+sid+"','"+day+"',0,'"+sub.value+"');";
        conn.query(query2, function(err, result){
          if(err){
            alert('Error in insert\n'+err);
          }
          else{
            alert("Insertion Successful");
          }
        });
      }
    });
  }
  else{
    // Do nothing!
}
    
}

function updateAttend(){
  var roll = totalAbs.innerHTML.split('\n');
  var day = date.value;  
 
  
    alert(roll[i]);
    var query1 = "select * from student where roll_no = "+roll[i]+";";    
    conn.query(query1, function(err, result){
      if(err){
        alert('Error in select'+err);
      }
      else{
        sid=result[0].reg_id;
        var query2 = "insert into attend values('"+sid+"','"+day+"',0,'"+sub.value+"');";
        conn.query(query2, function(err, result){
          if(err){
            alert('Error in insert\n'+err);
          }
          else{
            alert("Insertion Successful");
          }
        });
      }
    });    
  
}

function gotoHome(){
  this.close();
  window.open('index.html');
}
