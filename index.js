const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var sess;

app.get('/session', (req, res) => {
    sess = req.session;
    res.send(sess.username);
});

app.post('/session', (req, res) => {
    sess = req.session;
    sess.username = req.body.username;
    res.end('done');
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return console.log(err);
        res.redirect('/');
    })
});

app.get('/', (req, res) => {
    sess = req.session;
    if (sess.username) {
        return res.redirect('/employee_index');
    }
    res.render('index');
});

app.use(express.static(__dirname));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/register', (req, res) => {
    // res.sendFile(path.join(__dirname,"register.html"));
    res.render('register', { layout: 'employee_nav' });
});

app.get('/product_management', (req, res) => {
    res.render('product_management', { layout: 'employee_nav' });
});

app.get('/add_product', (req, res) => {
    res.render('add_product', { layout: 'employee_nav' });
})

app.get('/purchase', (req, res) => {
    res.render('purchase');
})

app.get('/employee_index', (req, res) => {
    res.render('employee_index', { layout: 'employee_nav' });
})

app.get('/createDiscount', (req, res) => {
    res.render('createDiscount', { layout: 'employee_nav' })
})

app.get('/erm', (req, res) => {
    res.render('erm', { layout: 'employee_nav' })
})

app.get('/customer_manage', (req, res) => {
    res.render('customer', { layout: 'employee_nav' })
})

app.get('/stock', (req, res) => {
    res.render('stock', { layout: 'employee_nav' })
})

// Products routes
app.use('/products', require('./routes/products'));
// Employees routes
app.use('/employees', require('./routes/employees'));
// Customers routes
app.use('/customers', require('./routes/customers'));
// Discount routes
app.use('/discount', require('./routes/discount'));
// ERM routes
app.use('/erm', require('./routes/erm'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));