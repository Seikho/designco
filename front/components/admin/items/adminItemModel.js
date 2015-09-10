var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ItemModel = require("../../item/itemModel");
var AdminItemModel = (function (_super) {
    __extends(AdminItemModel, _super);
    function AdminItemModel(item) {
        _super.call(this, item);
    }
    return AdminItemModel;
})(ItemModel);
module.exports = AdminItemModel;
//# sourceMappingURL=adminItemModel.js.map