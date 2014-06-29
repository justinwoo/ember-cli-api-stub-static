function APIStubStatic(project) {
  this.project = project;
  this.name    = 'Ember CLI Static Stub API Blueprint Addon';
}

APIStubStatic.prototype.blueprintsPath = function() {
  return __dirname + '/blueprints';
};

module.exports = APIStubStatic;
