import { expect } from 'chai';
import { server } from "../index";
var http = require('http'); // why does this have to be require???  If I try to import it fails

describe("server", function() {
  before(function() {
    server.listen(3000);
  });

  after(function() {
    server.close();
  });
});

describe("test", function() {
  it("should return 200", function(done) {
    http.get("http://localhost:3000", function(res) {
      expect(res.statusCode, 'status code [res.statusCode]').to.be.equal(200);
      done();
    });
  });
});