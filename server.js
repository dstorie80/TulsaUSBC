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


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});