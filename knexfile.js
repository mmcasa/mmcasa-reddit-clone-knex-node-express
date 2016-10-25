// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/reddit_clone_dev',
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
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds/test'
    }
  },

  production: {
    connection: 'postgres://localhost/reddit_clone_prod',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds/production'
    }
  }

};
