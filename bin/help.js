function loghelp(helper) {
    if (!helper) {
        console.log('type "tns-helper help" or "tns-helper h" for further information');
    } else {
        console.log('type "tns-helper help '+ helper +'" or "tns-helper h '+ helper + '" for further information');
    }
}

var help_command = {
    "help" : help_detail,
} 

function mainHelp() {
    console.log('main helping');   
}

function help_detail(args) {
    console.log('detail helping');       
}

function help(args) {
    if (args.length === 0) {
        mainHelp()
    }
    var command = args[0];

    if (command in help_command) {
        help_command[command](args.slice(1));
    } else {
        console.log("Cannot find help for " + command + ".");
        loghelp("help");
    }
}

exports.loghelp = loghelp;
exports.help = help;