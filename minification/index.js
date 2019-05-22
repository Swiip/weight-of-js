const run = require("../run");

const outDir = "./out";

const libs = {
  lodash: "../node_modules/lodash/lodash.js",
  jquery: "../node_modules/jquery/dist/jquery.js",
  react: "../node_modules/react/umd/react.development.js",
  "react-dom": "../node_modules/react-dom/umd/react-dom.development.js",
  vue: "../node_modules/vue/dist/vue.js"
};

const minifyers = ["uglifyjs", "closure", "babel-minify", "terser"];

const lsCommand = (lib, minifyer) => [
  "ls",
  "-lah",
  `${outDir}/${lib}.${minifyer}.js`
];

const commentsCommand = lib => [
  "./node_modules/.bin/uglifyjs",
  libs[lib],
  "--output",
  `${outDir}/${lib}.comments.js`,
  "--config-file",
  "./comments.json"
];

const uglifyCommand = lib => [
  "./node_modules/.bin/uglifyjs",
  libs[lib],
  "--output",
  `${outDir}/${lib}.uglifyjs.js`,
  "--compress",
  "--mangle"
];

const closureCommand = lib => [
  "./node_modules/.bin/google-closure-compiler",
  "--js",
  libs[lib],
  "--js_output_file",
  `${outDir}/${lib}.closure.js`,
  "--compilation_level",
  "ADVANCED",
  "--warning_level",
  "QUIET",
  "--jscomp_off=checkVars"
];

const babelMinifyCommand = lib => [
  "./node_modules/.bin/minify",
  libs[lib],
  "--out-file",
  `${outDir}/${lib}.babel-minify.js`
];

const terserCommand = lib => [
  "./node_modules/.bin/terser",
  libs[lib],
  "--output",
  `${outDir}/${lib}.terser.js`,
  "--compress",
  "--mangle"
];

const commands = [
  ["echo", "Minifying only comments..."],
  ...Object.keys(libs).map(commentsCommand),
  ["echo", "Minifying with uglifyjs..."],
  ...Object.keys(libs).map(uglifyCommand),
  ["echo", "Minifying with closure compiler..."],
  ...Object.keys(libs).map(closureCommand),
  ["echo", "Minifying with babel minify..."],
  ...Object.keys(libs).map(babelMinifyCommand),
  ["echo", "Minifying with terser..."],
  ...Object.keys(libs).map(terserCommand),
  ["echo", "Source files:"],
  ...Object.keys(libs).map(lib => ["ls", "-lah", libs[lib]]),
  ["echo", "Results:"],
  ...["comments", ...minifyers]
    .map(minifyer => Object.keys(libs).map(lib => lsCommand(lib, minifyer)))
    .flat()
];

run(commands);
