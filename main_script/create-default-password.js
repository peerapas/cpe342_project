var cryptoJS = require("crypto-js");

const encrypted = cryptoJS.AES.encrypt("1234", "cpe342");
const decrypted = cryptoJS.AES.decrypt(encrypted, "cpe342");

console.log(encrypted.toString());
console.log(decrypted.toString(cryptoJS.enc.Utf8));


// $.ajax({
//     url: 'employees/login/createPassword',
//     type: 'POST',
//     dataType: 'json',
//     success: ''
// });