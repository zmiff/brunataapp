// config/database.js

var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test'){
  var config = require('./database.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key)=>{
    process.env[key] = envConfig[key];
  })
}
