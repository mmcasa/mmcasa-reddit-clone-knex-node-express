const express = require("express")
const router = express.Router();
const knex = require("knex");

router.get("/", (req, res) => {
  // res.send("root page");
  res.render('index');
});

router.get("/404", (req, res) => {
  res.send("404 error");
});


module.exports = router
