const express = require('express');
const path = require('path')
const app = express()
const { engine } = require( 'express-handlebars');
const port = process.env.PORT || 4000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/html-css', (req, res) => {
    res.render('pages/html-css/html-css-main');
});
app.get('/html-css-start', (req, res) => {
    res.render('pages/html-css/start');
});
app.get('/html-css-flex', (req, res) => {2
    res.render('pages/html-css/flex');
});

app.get('/js-start', (req, res) => {
    res.render('pages/javascript/start');
});
app.get('/js-objects', (req, res) => {
    res.render('pages/javascript/objects');
});

app.get('/job-problem', (req, res) => {
    res.render('pages/job/theProblem');
});

app.listen(port, ()=>{
    console.log('app listen on port:', port)
})