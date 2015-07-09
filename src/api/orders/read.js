var db = require("../../store/db");
function get(criteria) {
    var request = db("orders").select();
    if (criteria)
        request.where(criteria);
    return request;
}
module.exports = get;
//# sourceMappingURL=read.js.map