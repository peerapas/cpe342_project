var cryptoJS = require("crypto-js");

const encrypted = cryptoJS.AES.encrypt("1234", "cpe342");
var decrypted = cryptoJS.AES.decrypt("U2FsdGVkX19dq3SVu4AYuo1tGDUIfSImiTGS5amFofs=", "cpe342");

console.log(encrypted.toString());
console.log(decrypted.toString(cryptoJS.enc.Utf8));


// $.ajax({
//     url: 'employees/login/createPassword',
//     type: 'POST',
//     dataType: 'json',
//     success: ''
// });