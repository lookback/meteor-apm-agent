var Jobs = Kadira.Jobs = {};

Jobs.getAsync = function(id, callback) {
  setTimeout(() => callback(null, {}));
};


Jobs.setAsync = function(id, changes, callback) {
  setTimeout(() => callback(null, {}));
};

Jobs.set = Kadira._wrapAsync(Jobs.setAsync);
Jobs.get = Kadira._wrapAsync(Jobs.getAsync);
