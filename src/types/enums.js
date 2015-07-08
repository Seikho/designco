(function (Event) {
    Event[Event["Create"] = 0] = "Create";
    Event[Event["Read"] = 1] = "Read";
    Event[Event["Update"] = 2] = "Update";
    Event[Event["Delete"] = 3] = "Delete";
    Event[Event["Notification"] = 4] = "Notification";
})(exports.Event || (exports.Event = {}));
var Event = exports.Event;
(function (Context) {
    Context[Context["User"] = 0] = "User";
    Context[Context["Order"] = 1] = "Order";
    Context[Context["Item"] = 2] = "Item";
})(exports.Context || (exports.Context = {}));
var Context = exports.Context;
(function (ActiveState) {
    ActiveState[ActiveState["Inactive"] = 0] = "Inactive";
    ActiveState[ActiveState["Active"] = 1] = "Active";
})(exports.ActiveState || (exports.ActiveState = {}));
var ActiveState = exports.ActiveState;
(function (ItemType) {
    ItemType[ItemType["Screen"] = 0] = "Screen";
})(exports.ItemType || (exports.ItemType = {}));
var ItemType = exports.ItemType;
