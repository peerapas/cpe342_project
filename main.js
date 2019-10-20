const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./'));

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('classicmodels.sqlite');

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,'register.html'));
});

let scalelist = "";

app.get('/database/vendor', (req, res) => {
    db.all('SELECT productvendor as vendor FROM products group by productvendor', (err, rows) => {
        // console.log(rows);
        vendorlist = rows.map(e => e.vendor);
        // console.log(vendorlist);
        res.send(vendorlist);
    });
});

app.get('/database/vendor/:vendor_id', (req, res) => {
    // console.log(vendorlist[0]);
    let id = req.params.vendor_id.split(' ');
    // console.log(vendorlist[id[1]]);
    db.all('select productCode, productName, productDescription, buyPrice from products where productvendor=$vendor',
        {
            $vendor: vendorlist[id[1]]
        },
        (err, rows) => {
            // console.log(rows);
            res.send(rows);
        }
    )
});

app.get('/database/scale', (req, res) => {
    db.all('SELECT productScale as scale FROM products group by productScale', (err, rows) => {
        // console.log(rows);
        scalelist = rows.map(e => e.scale);
        // console.log(scalelist);
        res.send(scalelist);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server staterted on port ${PORT}`);
});