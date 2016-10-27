// Node js Module
var path = require("path");
var fs = require("fs");

// Package Module
var Content = require("./content.js").template;

// Functions to Export
var file_function = [
    component,
    html,
    styleCommon,
    styleAndroid,
    styleIos
];

function component(name, typename, root) {
    var filename = "./" + name + ".component.ts";
    file_factory(name, typename, root, Content.component, filename);
}

function html(name, typename, root) {
    var filename = "./" + name + ".html";
    file_factory(name, typename, root, Content.html, filename);
}

function styleCommon(name, typename, root) {
    var filename = "./" + name + "-common.css";
    file_factory(name, typename, root, Content.styleCommon, filename);
}

function styleAndroid(name, typename, root) {
    var filename = "./" + name + ".android.css";
    file_factory(name, typename, root, Content.styleAndroid, filename);
}

function styleIos(name, typename, root) {
    var filename = "./" + name + ".ios.css";
    file_factory(name, typename, root, Content.styleIos, filename);
}

function file_factory(name, typename, root, content_func, filename) {
    var filepath = path.join(root, filename);
    var content = content_func(name, typename);

    try {
        fs.openSync(filepath, 'w');
        fs.writeFileSync(filepath, content);
        console.log(filepath + ' created successfully.');
    } catch(err) {
        console.log(err);
        console.log('Failed to create ' + filepath);
    }
}

exports.file_function = file_function;