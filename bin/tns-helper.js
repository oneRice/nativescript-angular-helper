#! /usr/bin/env node

var operate = require("./operate.js").operate;
var loghelp = require("./help.js").loghelp;

// get user input argument
var args = process.argv.slice(2);

if (args.length === 0) {
    // no input argument
    console.log("please input command");
    loghelp();
} else {
    // with argument
    operate(args);
}