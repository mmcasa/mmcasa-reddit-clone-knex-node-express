const express = require('express');
const router = express.Router();
const knex = require("knex");

router.get("/", (request, response) => {
  // response.send("root page");

  response.render('index', {
    pageTitle: 'Posts for User ' + request.params.user_id
  });
});

router.get("/posts", (request, response) => {
  // response.send("root page");
  response.render('index', {
    pageTitle: 'Posts for User ' + request.params.user_id
  });
});

router.get("/404", (request, response) => {
  response.send("404 error");
});


module.exports = router
