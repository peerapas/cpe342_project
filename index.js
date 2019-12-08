const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index'));

app.get('/register', (req, res) => {
    // res.sendFile(path.join(__dirname,"register.html"));
    res.render('register');
});

app.get('/stock_in', (req, res) => {
    res.render('stock_in', {layout: 'employee_nav'});
});

app.get('/add_product', (req, res) => {
    res.render('add_product', {layout: 'employee_nav'});
})

app.get('/purchase',(req,res) => {
    res.render('purchase');
})

app.get('/employee_index', (req,res) => {
    res.render('employee_index', {layout: 'employee_nav'});
})

app.get('/createDiscount', (req,res) => {
    res.render('createDiscount', {layout: 'employee_nav'})
})

// Products routes
app.use('/products', require('./routes/products'));
// Employees routes
app.use('/employees', require('./routes/employees'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));