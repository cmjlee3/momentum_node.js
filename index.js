require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');

const homeRoute = require('./routes/home');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', homeRoute);

app.listen(port, () => console.log('Server is running on ', port));
