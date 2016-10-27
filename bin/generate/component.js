var loghelp = require("../help/help.js").loghelp;
var Name = require("./name.js");

function generate_component(args) {
    if (args.length === 0) {
        console.log("please input name of component");
        loghelp("component");
        return;
    }

    if (args.length > 1) {
        console.log("We do not support multi words name.");
        console.log("Please conact words with '-'.")
        loghelp("component name");
        return;
    }

    var rawname = args[0];
    
    if (Name.notValidName(name)){
        console.log("Please input valid name.")
        loghelp("component name");
        return;
    }
    
    var name = rawname;
    var typename = Name.toTypeName(name);

    console.log("composing " + rawname + " typename " + typename);
}

exports.generate_component = generate_component;
