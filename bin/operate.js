var loghelp = require("./help/help.js").loghelp;
var help = require("./help/help.js").help;
var generate = require("./generate/generate.js").generate;

var command_operator = {
    "help" : help,
    "h" : help,
    "generate": generate,
    "g" : generate,
};

function operate(args) {
    if (args.length === 0) {
    // no input argument
        console.log("please input command");
        loghelp();
    }

    var command = args[0];

    if (command in command_operator) {
        command_operator[command](args.slice(1));
    } else {
        console.log("please input valid command");
        loghelp();        
    }
}

exports.operate = operate;