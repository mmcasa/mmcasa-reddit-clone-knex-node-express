const express = require("express");
const router = express.Router({
  mergeParams: true
});
const knex = require("../knex");

// /users/:user_id/posts
// INDEX for all the posts FOR A SPECIFIC USER
router.get('/', (request, response) => {
  console.log(request.params);
  knex('posts')
    .where({
      user_id: request.params.user_id
    })
    .then((postsFromDb) => {
      response.render('posts/index', {
        pageTitle: 'Posts for User ' + request.params.user_id,
        userOnViewId: request.params.user_id,
        postsOnView: postsFromDb
      });
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// /users/:user_id/posts/new
// CREATE a post FOR A SPECIFIC USER
router.get('/new', (request, response) => {

});

// /users/:user_id/posts/:id
// SHOWS a posts FOR A SPECIFIC USER
router.get('/:id', (request, response) => {

});

// /users/:user_id/posts/:id/edit
// EDITS posts FOR A SPECIFIC USER
router.get('/:id/edit', (request, response) => {

});

// /users/:user_id/posts
// UPDATES posts FOR A SPECIFIC USER
router.patch('/:id', (request, response) => {

});

// /users/:user_id/posts
// DELETES posts FOR A SPECIFIC USER
router.delete('/:id', (request, response) => {

});

module.exports = router;
