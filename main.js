const path = require("path");
const fs = require("fs");
const ini = require("./parseIni")
const env = require("./parseEnv")

const args = process.argv.slice(2);

if(args.length !== 1) {
    console.log("usage: node main.js <CONFIG_FILENAME>");
    process.exit(0)
}

const filename = args[0];

//Step1 : check if extension is .env or .ini
if (!fs.existsSync(filename)) {
    console.log(`The file ${filename} does not exist.`);
    process.exit(-1)
}
const content = fs.readFileSync(filename, "utf-8");

ini(content)