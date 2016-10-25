const express = require("express");
const router = express.Router();
const knex = require("../knex");

router.get('/', (request, response) => {

  knex('users')
    .then((usersFromDB) => {
      // console.log(usersFromDB);
      response.send('users index view');
      // response.render('users/index', {
      //   usersOnView: usersFromDB
      // })
    })
    // .catch((errorFromServer) => {
    //   // response.render('error', {errorOnView: errorFromServer})
    // });
})

module.exports = router;
