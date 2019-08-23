const Sequelize = require('sequelize')

var db_config = {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'attendance'
};

var sequelize = new Sequelize('mysql://'+db_config.user+':'+db_config.password+'@'+db_config.host
+':'+db_config.port+'/'+db_config.database+'');

sequelize.authenticate().then(()=>{
  console.log('database '+db_config.database+' connected');
}).catch((err)=>{
  console.log('error connecting to database: '+err);  
})