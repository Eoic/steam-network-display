const express = require('express');
const exphbs = require('express-handlebars');
const generateGraphData = require('./graph-generator');
const app = express();
const port = 5000;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public/'));

app.get('/', (_req, res) => {
    /*
    generateGraphData((users) => {
        res.render('home', {users});
    });
    */
});

app.listen(port, () => console.log(`Server is running on port ${port}.`));