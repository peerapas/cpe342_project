const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('classicmodels.sqlite');

var cryptoJS = require("crypto-js");

console.log(cryptoJS.HmacMD5("123456","cpe342").toString());

// const encrypted = cryptoJS.AES.encrypt("123456", "cpe342");
// // const decrypted = cryptoJS.AES.decrypt(encrypted, "cpe342");

// // console.log(encrypted);
// const a = encrypted.toString();
// console.log(a);
// console.log(decrypted.toString(cryptoJS.enc.Utf8));

// db.run("update employees set password = ?", a, (err) => {
//     if(err)console.log(err.message);
//     console.log(`Rows inserted ${this.changes}`)
// }
// );