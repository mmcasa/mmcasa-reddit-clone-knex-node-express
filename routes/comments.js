const express = require("express");
const router = express.Router({
  mergeParams: true
});
const knex = require("../knex");

// /posts/:post_id/comments
// INDEX for all the comments FOR A SPECIFIC POST
router.get('/', (request, response) => {
  knex('comments')
    .where({
      post_id: request.params.post_id,
    })
    .then((commentsFromDb) => {
      console.log(commentsFromDb);
      response.render('comments/index', {
        pageTitle: 'Index of all comments for Post ' + request.params.post_id,
        commentsOnView: commentsFromDb,
        postOnViewId: request.params.post_id
      })
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
});

// /posts/:post_id/comments/new
// SHOW form to create a new comment FOR A SPECIFIC POST
router.get('/new', (request, response) => {
  response.render('comments/new', {
      pageTitle: 'Create new Comments ',
      postOnViewId: request.params.post_id
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
})

// /posts/:post_id/comments/
// CREATE a comment FOR A SPECIFIC POST
router.post('/', (request, response) => {
  knex('comments')
    .insert({
      content: request.body.comment.content,
      user_id: parseInt(request.body.comment.user_id),
      post_id: request.params.post_id
    })
    .then(() => {
      response.redirect('/posts/' + request.params.post_id + '/comments')
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
})

// /posts/:post_id/comments/:id
// SHOWS a comment FOR A SPECIFIC POST
router.get('/:id', (request, response) => {
    // console.log(request.params);
    knex('comments')
      .where({
        post_id: request.params.post_id,
        id: request.params.id
      })
      .first()
      .then((commentFromDb) => {
        response.render('comments/show', {
          pageTitle: 'Show comment ' + request.params.id,
          postOnViewId: request.params.post_id,
          commentOnView: commentFromDb
        });
      })
      .catch((errorFromServer) => {
        console.error("error: ", errorFromServer);
        response.render('error', {
          errorOnView: errorFromServer
        });
      });
  })
  // /posts/:post_id/comments/:id/edit
  // EDITS comment FOR A SPECIFIC POST
router.get('/:id/edit', (request, response) => {
    knex('comments')
      .where({
        post_id: request.params.post_id,
        id: request.params.id
      })
      .first()
      .then((commentFromDb) => {
        console.log(commentFromDb);
        response.render('comments/edit', {
          pageTitle: 'Edit Comments ' + request.params.id,
          postOnViewId: request.params.post_id,
          commentOnView: commentFromDb
        })
      })
      .catch((errorFromServer) => {
        console.error("error: ", errorFromServer);
        response.render('error', {
          errorOnView: errorFromServer
        });
      });
  })
  // /posts/:post_id/comments
  // UPDATES comments FOR A SPECIFIC POST
router.patch('/:id', (request, response) => {
    knex('comments')
      .where({
        id: request.params.id,
        post_id: request.params.post_id
      })
      .first()
      .update({
        content: request.body.comment.content
      })
      .then(() => {
        response.redirect('/posts/' + request.params.post_id + '/comments')
      })
      .catch((errorFromServer) => {
        console.error("error: ", errorFromServer);
        response.render('error', {
          errorOnView: errorFromServer
        });
      });
  })
  // /posts/:post_id/comments/:id
  // DELETES comments FOR A SPECIFIC POST
router.delete('/:id', (request, response) => {
  knex('comments')
    .where({
      id: request.params.id,
    })
    .del()
    .then(() => {
      response.redirect('/posts/' + request.params.post_id + '/comments');
    })
    .catch((errorFromServer) => {
      console.error("error: ", errorFromServer);
      response.render('error', {
        errorOnView: errorFromServer
      });
    });
})
module.exports = router;
