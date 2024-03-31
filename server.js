const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/views/layouts/'),
}));

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));

app.use(routes);

app.get('/', (req, res) => {
    res.render('homepage')
});

app.get('/about_us', (req, res) => {
    res.render('about_us')
});

app.get('/contact_us', (req, res) => {
    res.render('contact_us')
});

app.get('/league_bowling', (req, res) => {
    res.render('league_bowling')
});

app.get('/partners', (req, res) => {
    res.render('partners')
});

app.get('/recognition', (req, res) => {
    res.render('recognition')
});

app.get('/tournaments', (req, res) => {
    res.render('tournaments')
});

app.get('/youth_bowling', (req, res) => {
    res.render('youth_bowling')
});

app.get('/homepage', (req, res) => {
    res.render('homepage')
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});