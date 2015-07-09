var db = require("../../store/db");
var enums = require("../../types/enums");
var ActiveState = enums.ActiveState;
var ItemType = enums.ItemType;
function put(item) {
    if (!isValidItem(item))
        return Promise.reject("Invalid item: Require fields missing");
    return db("items")
        .insert(item)
        .then(function (newIds) { return Promise.resolve(newIds[0]); });
}
function isValidItem(item) {
    delete item.id;
    item.itemState = ActiveState.Active;
    var isValidType = !!ItemType[item.itemType];
    var isValidDesc = item.description.length > 5;
    return isValidType && isValidDesc;
}
module.exports = put;
//# sourceMappingURL=create.js.map