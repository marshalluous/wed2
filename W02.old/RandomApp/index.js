const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes/index');

app.set('view engine', 'hbs');
app.set('views', path.resolve('views'));

app.use(bodyParser.json()); // fügt den BODY tag bei req an
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3001);

console.log('Server is running on http://localhost:3001');