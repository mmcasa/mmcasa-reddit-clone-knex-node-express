'use strict'

const express = require('express');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes')


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride("_method"));


// allowing routes to connect to other routes

app.use('/', routes.main);
app.use('/users', routes.users);
app.use('/posts/', routes.posts);
// app.use('/posts/:post_id/comments', routes.comments);


app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
