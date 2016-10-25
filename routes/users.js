const express = require("express");
const router = express.Router();
const knex = require("../knex");


// users index route at GET localhost:3000/users
router.get('/', (request, response) => {
  knex('users')
    .then((usersFromDB) => {
      console.log(usersFromDB);
      response.render('users/index', {
        pageTitle: "Users Index",
        usersOnView: usersFromDB
      });
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// GET localhost:3000/users/new  SHOW new user form

router.get('/new', (request, response) => {
  response.render('users/new', {
    pageTitle: 'Add new user'
  });
});

// POST localhost:3000/users ADD user to databse

router.post('/', (request, response) => {
  console.log(request.body.user.email);
  knex('users')
    .insert({
      email: request.body.user.email
    })
    .then(() => {
      response.redirect('/users')
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// GET /users/:id SHOW a single user

router.get('/:id', (request, response) => {
  knex('users')
    .where({
      id: request.params.id
    })
    .first()
    .then((userFromDb) => {
      response.render('users/show', {
        pageTitle: 'Show User ' + request.params.id,
        userOnView: userFromDb
      });
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// GET /users/:id/edit SHOW edit form for a single user

router.get('/:id/edit', (request, response) => {
  // console.log(request.params);
  knex('users')
    .where({
      id: request.params.id
    })
    .first()
    .then((userFromDb) => {
      response.render('users/edit', {
        pageTitle: 'Edit User ' + request.params.id,
        userOnView: userFromDb
      });
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// PATCH/PUT /users/:id UPDATE a single user

router.patch('/:id', (request, response) => {
  // console.log(request.params);
  knex('users')
    .where({
      id: request.params.id
    })
    .first()
    .update({
      email: request.body.user.email
    })
    .then(() => {
      response.redirect('/users');
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// DELETE /users/:id DELETE a single user

router.delete('/:id', (request, response) => {
  knex('users')
    .where({
      id: request.params.id
    })
    .del()
    .then(() => {
      response.redirect('/users');
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

module.exports = router;
