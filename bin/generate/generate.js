var loghelp = require("../help/help.js").loghelp;
var generate_component = require("./component.js").generate_component;
var generate_page = require("./page.js").generate_page;

var command_operator = {
    "component" : generate_component,
    "page" : generate_page,
}


function generate(args) {
    if (args.length === 0) {
        console.log("please input what to generate");
        loghelp("generate");
        return;
    }

    var command = args[0];

    if (command in command_operator) {
        command_operator[command](args.slice(1));
    } else {
        console.log("please input valid type to generate");
        loghelp("generate");        
    }

}

exports.generate = generate;