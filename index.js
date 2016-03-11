/* jshint node: true */
'use strict';

var path        = require('path');

function importBootstrap(app){
  var bootstrapPath = path.join(app.bowerDirectory, 'bootstrap/dist');



  app.import(path.join(bootstrapPath, 'css/bootstrap.css'));
  //app.import(path.join(bootstrapPath, 'css/bootstrap.css.map'), {destDir: 'assets'});

  app.import(path.join(bootstrapPath, 'js/bootstrap.js'));

  app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.eot'), {destDir: '/fonts'});
  app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.svg'), {destDir: '/fonts'});
  app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.ttf'), {destDir: '/fonts'});
  app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff'), {destDir: '/fonts'});
  app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff2'), {destDir: '/fonts'});

}

module.exports = {
  name: 'ember-cli-modal-service',
  included: function included(app) {
  	this._super.included(app);
  	importBootstrap(app);
  }
};
