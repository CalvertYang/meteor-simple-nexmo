Package.describe({
  name: 'calvert:simple-nexmo',
  summary: 'A nodejs wrapper for nexmo API',
  version: '1.0.0',
  git: 'https://github.com/CalvertYang/meteor-simple-nexmo'
});

Npm.depends({
  'simple-nexmo': '2.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('simple-nexmo.js', 'server');
  api.export('Nexmo');
});
