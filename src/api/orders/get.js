var db = require("../../store/db");
function get(userId) {
    var request = db("orders").select();
    if (userId)
        request.where({ userId: userId });
    return request;
}
module.exports = get;
