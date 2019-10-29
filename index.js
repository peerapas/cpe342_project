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

// Products routes
app.use('/products', require('./routes/products'));
// Employees routes
app.use('/employees', require('./routes/employees'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));