const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// database
const products = [
    {
        id: 1,
        name: 'Laptop'
    },
    {
        id: 2,
        name: 'microphone'
    }
];

// settings
app.set('port', process.env.PORT || 3000)

// static files
app.use(express.static(path.join(__dirname, 'public')));

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



// routes
app.get('/products', (req,res) => {
    res.json(products)
});

app.post('/products', (req,res) => {
    console.log(req.body);
    res.send('datos recibidos')
});

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});