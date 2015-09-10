var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var $ = require("jquery");
var ItemList = require("../../item/itemList");
var AdminItemList = (function (_super) {
    __extends(AdminItemList, _super);
    function AdminItemList() {
        _super.call(this);
        $.get("/items")
            .then(this.loadModels);
    }
    return AdminItemList;
})(ItemList);
module.exports = AdminItemList;
//# sourceMappingURL=adminItemList.js.map