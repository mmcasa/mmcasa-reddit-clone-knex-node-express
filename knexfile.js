// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/reddit_clone_dev',
    debug: false,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds/development'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/reddit_clone_test',
    debug: false,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds/test'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://localhost/reddit_clone_prod',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds/production'
    }
  }

};
