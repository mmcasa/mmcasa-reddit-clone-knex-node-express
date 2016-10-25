// set our environment
process.env.NODE_ENV = process.env.NODE_ENV || 'test';

// connect to server & knex
const knex = require('../knex');
const server = require('../app');

// include Chai
const chai = require('chai');
const expect = require('chai')
  .expect;
const request = require('supertest')(server)





describe('routes : index', () => {
  beforeEach((done) => {
    knex.migrate.rollback()
      .then(() => {
        knex.migrate.latest()
          .then(() => {
            return knex.seed.run()
              .then(() => {
                done();
              });
          });
      });
  });

  afterEach((done) => {
    knex.migrate.rollback()
      .then(() => {
        done();
      });
  });

  describe('GET /', () => {
    it('should render the index', (done) => {
      request.get('/')
        .expect(200)
        .end((error, response) => {
          console.log(response);
        });
    });
  });
});
