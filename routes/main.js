const express = require('express');
const router = express.Router();
const knex = require("knex");

router.get("/", (request, response) => {
  response.render('index', {
    pageTitle: 'Home Page'
  });
});

module.exports = router
