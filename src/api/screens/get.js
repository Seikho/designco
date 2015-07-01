var Promise = require("bluebird");
var db = require("../../store/db");
function get(id) {
    var request = db("screens").select();
    if (!id)
        return request;
    return new Promise(function (resolve, reject) {
        request
            .where({ id: id })
            .then(function (screens) { return Promise.resolve(screens[0]); });
    });
}
module.exports = get;
