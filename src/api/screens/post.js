var Promise = require("bluebird");
var db = require("../../store/db");
function post(screen) {
    if (!isValidScreen(screen))
        return Promise.reject("Invalid request. Required fields not supplied.");
    return db("screens")
        .update(screen)
        .where({ id: screen.id });
}
function isValidScreen(screen) {
    var hasId = screen.id > 0;
    var hasDescrption = screen.description.length > 0;
    return (hasId && hasDescrption);
}
module.exports = post;
