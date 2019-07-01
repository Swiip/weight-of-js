const run = require("../run");

const libs = {
  react: [
    "react-app/build/static/js/2.b41502e9.chunk.js",
    "react-app/build/static/js/main.28647029.chunk.js",
    "react-app/build/static/js/runtime~main.a8a9905a.js"
  ],
  vue: ["vue/dist/js/app.51653d86.js", "vue/dist/js/chunk-vendors.00ccceae.js"],
  angular: [
    "angular/dist/aot/main-es2015.js",
    "angular/dist/aot/polyfills-es2015.js",
    "angular/dist/aot/runtime-es2015.js",
    "angular/dist/aot/styles-es2015.js",
    "angular/dist/aot/vendor-es2015.js"
  ]
};

const commands = Object.values(libs).map(lib => {
  const array = Array.isArray(lib) ? lib : [lib];
  return ["ls", "-lah", ...array];
});

run(commands);
