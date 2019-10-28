const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./'));

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,"register.html"), (err) => console.log(err));
});

// Products routes
app.use('/products', require('./routes/products'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));