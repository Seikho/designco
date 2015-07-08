var db = require("../../store/db");
function get(itemId) {
    var request = db("items").select();
    if (itemId)
        request.where({ id: itemId });
    return request;
}
module.exports = get;
