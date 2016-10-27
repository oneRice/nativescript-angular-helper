// Node js Module
var fs = require("fs"); 
var path = require("path");

// Package Module
var Name = require("./name.js");
var Blueprint = require("./blueprint/page/page.js");
var loghelp = require("../help/help.js").loghelp;

// MACRO Value
var PAGE_TO_TOOT = "./app/pages"

function generate_page(args) {
    if (! validArgument(args)) {
        return;
    }

    // convert typename
    if (! Name.validName(args[0])){
        console.log("Please input valid name.")
        loghelp("page name");
        return;
    }
    
    var name = Name.toName(args[0]);
    var typename = Name.toTypeName(args[0]);

    // path for page
    var page_path = path.join(process.cwd(), PAGE_TO_TOOT, name);
    if (! path.isAbsolute(page_path)){
        console.log(page_path + " is not a valid path");
        return;
    }

    try {
        var stat = fs.statSync(page_path);
        // duplicated name
        if (stat) {
            console.log(name + " page is already exist.");
            console.log("Please choose a valid name.");
            return;
        }
    }
    catch(err) {
        // valid name
    }

    fs.mkdir(page_path, (err) => {
        if (err) {
            console.log("Failed to create folder " + page_path + ".");
        } else {
            console.log("Folder " + page_path + " successfully.");
        }
    })

    // generate using blueprint
    for (var func of Blueprint.file_function) {
        func(name, typename, page_path);
    }
}

function validArgument(args) {

    if (args.length === 0) {
        console.log("please input name of page");
        loghelp("page");
        return false;
    }

    if (args.length > 1) {
        console.log("We do not support multi words name.");
        console.log("Please conact words with '-'.")
        loghelp("page name");
        return false;
    }

    return true;
}

exports.generate_page = generate_page;