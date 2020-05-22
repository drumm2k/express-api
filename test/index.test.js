import { expect, server, BASE_URL } from './setup';

describe('Index page test', () => {
  it('gets base url', (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Environment variable is coming across'
        );
        done();
      });
  });
});

describe('Events test', () => {
  it('gets base url', (done) => {
    server
      .get(`${BASE_URL}/events`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.events).to.be.an('array');
        done();
      });
  });
});
