import { expect } from 'chai'

describe('test', function () {
  it('should pass', function () {
    expect('string').to.be.a('string')
  });

  it('should return 200', function (done) {
    http.get('http://localhost:3000', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

})

