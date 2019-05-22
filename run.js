const { spawn } = require("child_process");

const exec = ([command, ...args]) =>
  new Promise(resolve => {
    const child = spawn(command, args, { stdio: "inherit" });
    child.on("exit", resolve);
  });

const run = async commands =>
  commands.reduce(
    (acc, command) => acc.then(() => exec(command)),
    Promise.resolve()
  );

module.exports = run;
