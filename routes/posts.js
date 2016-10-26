const express = require("express");
const router = express.Router({
  mergeParams: true
});
const knex = require("../knex");

// /users/:user_id/posts
// INDEX for all the posts FOR A SPECIFIC USER
router.get('/', (request, response) => {
  knex('posts')
    .where({
      user_id: request.params.user_id
    })
    .then((postsFromDb) => {
      console.log(postsFromDb);
      response.render('posts/index', {
        pageTitle: 'Index of all Posts for User ' + request.params.user_id,
        postsOnView: postsFromDb,
        userOnViewId: request.params.user_id
      })
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// /users/:user_id/posts/new
// SHOW form to create a new post FOR A SPECIFIC USER
router.get('/new', (request, response) => {
  response.render('posts/new', {
      pageTitle: 'Write new post',
      userOnViewId: request.params.user_id
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
router.post('/', (request, response) => {
  console.log(request.body.post);
  knex('posts')
    .insert({
      content: request.body.post.content,
      title: request.body.post.title,
      user_id: request.params.user_id
    })
    .then(() => {
      response.redirect('/users/' + request.params.user_id + '/posts')
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// /users/:user_id/posts/:id
// SHOWS a posts FOR A SPECIFIC USER
router.get('/:id', (request, response) => {
  knex('posts')
    .where({
      user_id: request.params.user_id,
      id: request.params.id
    })
    .first()
    .then((postFromDb) => {
      // response.send(postFromDb)
      response.render('posts/show', {
        pageTitle: 'Show Post ' + request.params.id,
        userOnViewId: request.params.user_id,
        postOnView: postFromDb
      });
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// /users/:user_id/posts/:id/edit
// EDITS posts FOR A SPECIFIC USER
router.get('/:id/edit', (request, response) => {
  knex('posts')
    .where({
      user_id: request.params.user_id,
      id: request.params.id
    })
    .first()
    .then((postFromDb) => {
      console.log(postFromDb);
      response.render('posts/edit', {
        pageTitle: 'Edit Post ' + request.params.id,
        userOnViewId: request.params.user_id,
        postOnView: postFromDb
      })
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// /users/:user_id/posts/:id
// UPDATES posts FOR A SPECIFIC USER
router.patch('/:id', (request, response) => {
  knex('posts')
    .where({
      id: request.params.id,
      user_id: request.params.user_id
    })
    .first()
    .update({
      title: request.body.post.title,
      content: request.body.post.content
    })
    .then(() => {
      response.redirect('/users/' + request.params.user_id + '/posts')
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// /users/:user_id/posts
// DELETES posts FOR A SPECIFIC USER
router.delete('/:id', (request, response) => {
  knex('posts')
    .where({
      id: request.params.id,
    })
    .del()
    .then(() => {
      response.redirect('/users/' + request.params.user_id + '/posts');
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

module.exports = router;
