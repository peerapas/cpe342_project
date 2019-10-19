const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./classicmodels.sqlite',
sqlite3.OPEN_READWRITE, (err) => {
  if(err)return console.log(err.message);
  console.log('Connect to the in-memory Sqlite datebase');
});

let category = "";
db.serialize( () => {
    db.each(
        `select productLine as name
        from productlines`, (err, row) => {
            if(err)console.log(err.message);
            console.log(row.name);
            category += `<a href="#" class="list-group-item"> ${row.name} </a>`
        }
    );
})
document.querySelector('.list-group').innerHTML = category;