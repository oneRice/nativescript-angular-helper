var loghelp = require("../help/help.js").loghelp;

var fs = require("fs"); 

function generate_page(args) {
    if (args.length === 0) {
        console.log("please input name of page");
        loghelp("page");
        return;
    }

    if (args.length > 1) {
        console.log("We do not support multi words name.");
        console.log("Please conact words with '-'.")
        loghelp("page name");
        return;
    }

    var rawname = args[0];

    console.log("current path: " + process.cwd());

    console.log("composing " + rawname);
}

exports.generate_page = generate_page;