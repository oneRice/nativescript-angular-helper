var loghelp = require("./help.js").loghelp;

function generate(args) {
    if (args.length === 0) {
        console.log("please input what to generate");
        loghelp("component");
    }

}

exports.generate = generate;