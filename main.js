const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./'));

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('classicmodels.sqlite');

const fakeDatabase = [
    {ProductLine: "Bike"},
    {ProductLine: "Electronics"}
]

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,'register.html'));
});

app.get('/database/category', (req, res) => {
    db.all('select productLine as name from productlines', (err, rows) => {
        console.log(rows);
        const allCategory = rows.map(e => e.name);
        console.log(allCategory);
        res.send(allCategory);
    });
})

app.get('/database/category/:categoryName', (req, res) => {
    db.all('select ')
})

app.post('/database/category', (req, res) => {
    console.log(req.body);
    res.send({});
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server staterted on port ${PORT}`);
});