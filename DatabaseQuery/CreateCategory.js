const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./classicmodels.sqlite',
sqlite3.OPEN_READWRITE, (err) => {
  if(err)return console.log(err.message);
  console.log('Connecting to the Sqlite datebase');
});
let sql = `select productLine as name from productlines`;
