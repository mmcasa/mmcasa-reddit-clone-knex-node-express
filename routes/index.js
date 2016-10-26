// connects to other route files
// it's like a route directory

const main = require('./main');
const users = require('./users');
const posts = require('./posts');
const comments = require('./comments');

module.exports = {
  main,
  users,
  comments,
  posts
}
