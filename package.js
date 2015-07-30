Package.describe({
    summary: "Standalone test spies, stubs and mocks for JavaScript.",
    name: "eehah5ru:sinon",
    version: "1.14.1_2",
    git: "https://github.com/eehah5ru/meteor-sinon.git",
    debugOnly: true
});

Package.onUse(function (api, where) {
    api.versionsFrom('0.9.3');

    api.use('coffeescript');
    api.use('eehah5ru:chai@2.1.0_1');

    api.addFiles('sinon-1.14.1.js');
    api.addFiles('sinon-chai-2.6.0.js');
    api.addFiles('install-sinonChai.js');
    api.addFiles('Helpers.coffee');

    api.export(['sinon','sinonChai']);
    api.export(['spies','stubs']);
});

Package.onTest(function(api) {
  api.use(['eehah5ru:chai@2.1.0_1', 'eehah5ru:sinon@1.14.1_2', 'coffeescript', 'tinytest']);

  api.addFiles('tests/HelpersTest.coffee');
});
