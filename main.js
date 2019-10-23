const path = require("path");
const fs = require("fs");
const parseIni = require("./parseIni")
const parseEnv = require("./parseEnv")
const getFileName = require("./getFileName")

const args = process.argv.slice(2);

if(args.length !== 1) {
    console.log("usage: node main.js <CONFIG_FILENAME>");
    process.exit(0)
}

const filename = args[0];
let newFileName = "";


if (!fs.existsSync(filename)) {
    console.log(`The file ${filename} does not exist.`);
    process.exit(-1)
} else {
    const content = fs.readFileSync(filename, "utf-8");
    const fileParameters = path.parse(filename);
    switch (fileParameters.ext) {
        case ".ini":
            jsonIni = parseIni(content)
            newFileName = getFileName(fileParameters.ext)
            fs.writeFile(newFileName, jsonIni, function(err) {
                if(err) {
                    console.log(`An error as been occured : ${err}`)
                } else {
                    console.log(`File ${newFileName} has been successfully created`)
                }
            })
            break;
        case ".env":
            newFileName = getFileName(fileParameters.ext)
            jsonEnv = parseEnv(content)
            fs.writeFile(newFileName, jsonEnv, function(err) {
                if(err) {
                    console.log(`An error as been occured : ${err}`)
                } else {
                    console.log(`File ${newFileName} has been successfully created`)
                }
            })
            break;
        case "":
            if(fileParameters.name !== ".env") {
                console.log("This type of file isn't supported")
                process.exit(-2)
            } else {
                newFileName = getFileName(fileParameters.name)
                jsonEnv = parseEnv(content)
                fs.writeFile(newFileName, jsonEnv, function(err) {
                    if(err) {
                        console.log(`An error as been occured : ${err}`)
                    } else {
                        console.log(`File ${newFileName} has been successfully created`)
                    }
                }) 
            }
            break;
        default:
            console.log("This type of file isn't supported")
            process.exit(-2)
            break;
    }
}
