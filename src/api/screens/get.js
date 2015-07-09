var Promise = require("bluebird");
var db = require("../../store/db");
var Boom = require("boom");
function get(id) {
    var request = db("screens").select();
    return new Promise(function (resolve, reject) {
        if (id)
            request.where({ id: id });
        request
            .then(function (screens) {
            if (id)
                return resolve(screens[0]);
            resolve(screens);
        }).catch(function (error) { return reject(Boom.expectationFailed("Failed to retrieve from database: " + error)); });
    });
}
module.exports = get;
//# sourceMappingURL=get.js.map