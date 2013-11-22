Package.describe({
  summary: "Angularjs"
});

Package.on_use(function (api) {
  Npm.depends({
    connect: '2.8.8'
  });

  api.use('webapp', ['server']);

  api.add_files('angular.min.js', 'client');
  api.add_files('angular-animate.min.js', 'client');
  api.add_files('angular-cookies.min.js', 'client');
  api.add_files('angular-loader.min.js', 'client');
  api.add_files('angular-resource.min.js', 'client');
  api.add_files('angular-route.min.js', 'client');
  api.add_files('angular-sanitize.min.js', 'client');
  api.add_files('angular-touch.min.js', 'client');
  api.add_files('client.js', 'client');
 
  api.add_files('server.js', 'server');
});