function component(name, typename, root) {
    console.log("component");
}

function html(name, typename, root) {
    console.log("html");
}

function styleCommon(name, typename, root) {
    console.log("styleCommon");
}

function styleAndroid(name, typename, root) {
    console.log("styleAndroid");
}

function styleIos(name, typename, root) {
    console.log("styleIos");
}

var file_function = [
    component,
    html,
    styleCommon,
    styleAndroid,
    styleIos
];

exports.file_function = file_function;