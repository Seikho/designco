var db = require("../../store/db");
function put(screen) {
    delete screen.id;
    return db("screens")
        .insert(screen);
}
module.exports = put;
