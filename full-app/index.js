const run = require("../run");

const libs = {
  react: [
    "react-app/build/static/js/2.5f618ee3.chunk.js",
    "react-app/build/static/js/main.f93919f2.chunk.js",
    "react-app/build/static/js/runtime~main.a8a9905a.js"
  ],
  vue: ["vue/dist/js/app.3349c784.js", "vue/dist/js/chunk-vendors.4457acd3.js"],
  angular: [
    "angular/dist/aot/main-es2015.a6b06af3021846df97c0.js",
    "angular/dist/aot/polyfills-es2015.5728f680576ca47e99fe.js",
    "angular/dist/aot/runtime-es2015.858f8dd898b75fe86926.js"
  ]
};

const commands = Object.values(libs).map(lib => {
  const array = Array.isArray(lib) ? lib : [lib];
  return ["ls", "-lah", ...array];
});

run(commands);
