var db = require("../../store/db");
var Promise = require("bluebird");
function get(criteria) {
    var request = db("items").select();
    if (criteria)
        request
            .where(criteria)
            .then(function (items) { return Promise.resolve(items[0]); });
    return request;
}
module.exports = get;
//# sourceMappingURL=read.js.map