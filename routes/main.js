const express = require("express")
const router = express.Router();
const knex = require("knex");

router.get("/", (request, response) => {
  // response.send("root page");
  response.render('index');
});

router.get("/posts", (request, response) => {
  // response.send("root page");
  response.render('index');
});

router.get("/404", (request, response) => {
  response.send("404 error");
});


module.exports = router
