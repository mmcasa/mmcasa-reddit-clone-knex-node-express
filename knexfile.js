// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/reddit_clone_dev',
    debug: false,
    migrations: {
      directory: './migrations'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/reddit_clone_test',
    debug: false,
    migrations: {
      directory: './migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://localhost/reddit_clone_prod',
    migrations: {
      directory: './migrations'
    }
  }

};
