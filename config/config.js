require("dotenv").config();
const keys = require("./keys.js");

module.exports = {
  "development": {
    "username": keys.mysql.username,
    "password": keys.mysql.pw,
    "database": keys.mysql.db,
    "host": keys.mysql.host,
    "port": keys.mysql.port,
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "test": {
    "username": keys.mysql.username,
    "password": keys.mysql.pw,
    "database": keys.mysql.db,
    "host": keys.mysql.host,
    "port": keys.mysql.port,
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    //"username": "vf2pygijbchf8976",
    //"password": "pu4pj10kcg9cz9xg",
    //"database": "l3hpzpe39o6wfa9t",
    //"host": "sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
    //"operatorsAliases": 0
  }
}