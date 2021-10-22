const express =  require('express');

const app = express();

app.set('view engine', 'pug');
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', { prompt: "Whos is buried in Grant's tomb?"});
});

app.get('/sandbox', (req, res) => {
    res.render('sandbox');
});

app.all('/hello', (req, res) => {
    res.render('hello', { name: req.body.username });
});

app.listen(3000, () => {
    console.log('The application is running on localhost: 3000!');
});