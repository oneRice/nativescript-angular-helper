// Only allow name with alphabet and -
function validName(name) {
    if( /^[-]+$/.test(name)){
        return false;
    }
    return /^[a-zA-Z0-9()-]*$/.test(name);
}

function toName(name) {
    return name;
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

exports.validName = validName;
exports.toName = toName;
exports.toTypeName = toTypeName;