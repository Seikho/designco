var Promise = require("bluebird");
var db = require("../../store/db");
function put(screen) {
    delete screen.id;
    if (!isValidScreen(screen))
        return Promise.reject("Invalid input: Description is required");
    return db("screens")
        .insert(screen);
}
function isValidScreen(screen) {
    var hasDescription = screen.description.length > 0;
    return hasDescription;
}
module.exports = put;
