const fs = require("fs");
const zlib = require("zlib");
const run = require("../run");

const deflate = zlib.createDeflate();
const gzip = zlib.createGzip();
const brotli = zlib.createBrotliCompress();

const outDir = "./out";

const libs = {
  lodash: "../node_modules/lodash/lodash.min.js",
  jquery: "../node_modules/jquery/dist/jquery.min.js",
  react: "../node_modules/react/umd/react.production.min.js",
  "react-dom": "../node_modules/react-dom/umd/react-dom.production.min.js",
  vue: "../node_modules/vue/dist/vue.min.js"
};

const compressions = {
  deflate: zlib.createDeflate,
  gzip: zlib.createGzip,
  brotli: zlib.createBrotliCompress
};

const lsCommand = (compression, lib) => [
  "ls",
  "-lah",
  `${outDir}/${lib}.js.${compression}`
];

const compressFile = (compression, lib) =>
  new Promise((resolve, reject) => {
    const stream = fs
      .createReadStream(libs[lib])
      .pipe(compressions[compression]())
      .pipe(fs.createWriteStream(`${outDir}/${lib}.js.${compression}`));

    stream.on("close", resolve);
    stream.on("end", resolve);
    stream.on("error", reject);
  });

const main = async () => {
  await Promise.all(
    Object.keys(compressions)
      .map(compression => {
        console.log("Compress with", compression, "...");
        return Object.keys(libs).map(lib => compressFile(compression, lib));
      })
      .flat()
  );

  console.log("Source files:");

  await run(Object.keys(libs).map(lib => ["ls", "-lah", libs[lib]]));

  console.log("Output files:");

  await run(
    Object.keys(compressions)
      .map(compression =>
        Object.keys(libs).map(lib => lsCommand(compression, lib))
      )
      .flat()
  );
};

main();
