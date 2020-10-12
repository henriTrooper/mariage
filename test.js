const supertest = require('supertest');
const chai = require('chai');
const server = require('./index');


chai.should();

const api = supertest.agent(server);

describe('Add method', () => {
  it('testing route /post', (done) => {
    const data = {
      nom: 'RCP',
      numero: 1,
      description: 'Chasseur',
      types: [],
    };
    api.post('/save')
      .set('Connetion', 'keep alive')
      .set('Content-Type', 'application/json')
      .send(data)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
});
