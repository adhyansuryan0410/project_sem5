var sem = document.getElementById('semSelect');
var date = document.getElementById('date');
var sub = document.getElementById('subject');
var absList = document.getElementById('absStud');
var totalAbs = document.getElementById('totalAbsStud');
var submit = document.getElementById('submit');

var mysql = require('mysql');

var tkBtn = document.getElementById('takebtn');
tkBtn.addEventListener('click', function(){
  absList.disabled = false;
  totalAbs.disabled = false;
});

function addtoAbsList(){
  var x = absList.value;
  totalAbs.append(x+"\n");
}



submit.addEventListener('click', function(){
  var roll = totalAbs.innerHTML.split('\n');
  
  for(var i=0; i<roll.length; i++){
    var query = "insert into attend values"
  }
});
