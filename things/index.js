const run = require("../run");

const libs = {
  lodash: "../node_modules/lodash/lodash.min.js",
  jquery: "../node_modules/jquery/dist/jquery.min.js",
  backbone: [
    "../node_modules/underscore/underscore-min.js",
    "../node_modules/backbone/backbone-min.js"
  ],
  angularjs: "../node_modules/angular/angular.min.js",
  react: [
    "../node_modules/react/umd/react.production.min.js",
    "../node_modules/react-dom/umd/react-dom.production.min.js"
  ],
  "angular-jit": "../hello-world/angular/dist/jit/vendor-es2015.js",
  "angular-aot": "../hello-world/angular/dist/aot/vendor-es2015.js",
  vue: "../node_modules/vue/dist/vue.min.js",
  preact: "../node_modules/preact/dist/preact.module.js",
  ember:
    "../hello-world/ember/dist/assets/vendor-3773a5e07b2cba44da7f503c75db1335.js",
  leaflet: "../node_modules/leaflet/dist/leaflet.js",
  bootstrap: [
    "../node_modules/bootstrap/dist/js/bootstrap.min.js",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  bulma: "../node_modules/bulma/css/bulma.min.css"
};

const commands = Object.values(libs).map(lib => {
  const array = Array.isArray(lib) ? lib : [lib];
  return ["ls", "-lah", ...array];
});

run(commands);
