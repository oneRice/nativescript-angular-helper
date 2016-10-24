var loghelp = require("../help/help.js").loghelp;

function notValidName(name) {
    return false;
}

function toTypeName(name) {
    var name_part = name.split('-');
    name_part = name_part.map(function(value) {
        if (value === "") {
            return "";
        }
        
        return value[0].toUpperCase() + value.slice(1);
    })
    return name_part.join("");
}

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
    
    if (notValidName(name)){
        console.log("Please input valid name.")
        loghelp("component name");
        return;
    }
    
    var name = rawname;
    var typename = toTypeName(name);

    console.log("composing " + rawname + " typename " + typename);
}

exports.generate_component = generate_component;
