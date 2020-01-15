Tinytest.addAsync(
  'Jobs - get',
  function (test, done) {
    var value = 10;
    var id = 'the-id';

    var newSend = function(_id) {
      test.equal(_id, id);
      done();
    };
  }
);

Tinytest.addAsync(
  'Jobs - set',
  function (test, done) {
    var value = 10;
    var id = 'the-id';

    var newSend = function(_id, _params) {
      test.equal(_id, id);
      test.equal(_params, {val: value});
      done();
    };
  }
);
