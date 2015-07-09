var db = require("../../store/db");
var enums = require("../../types/enums");
var ItemType = enums.ItemType;
var Promise = require("bluebird");
function get(itemType) {
    var isValidType = !!ItemType[itemType];
    if (!isValidType)
        return Promise.reject("Invalid item type");
    return db("items")
        .select()
        .where({ itemType: itemType });
}
module.exports = get;
//# sourceMappingURL=readByType.js.map