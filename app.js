const express = require('express');
const morgan = require('morgan')
// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

app.use(express.static('public'));

app.get('/', (req,res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs});
});

app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});

// 404 page
app.use((req,res) => {
    res.status(404).render('404', { title: '404'});
})