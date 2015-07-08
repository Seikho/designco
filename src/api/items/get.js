var db = require("../../store/db");
var Promise = require("bluebird");
function get(itemId) {
    var request = db("items").select();
    if (itemId)
        request
            .where({ id: itemId })
            .then(function (items) { return Promise.resolve(items[0]); });
    return request;
}
module.exports = get;
