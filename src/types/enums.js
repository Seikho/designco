(function (Event) {
    Event[Event["Create"] = 0] = "Create";
    Event[Event["Read"] = 1] = "Read";
    Event[Event["Update"] = 2] = "Update";
    Event[Event["Delete"] = 3] = "Delete";
    Event[Event["Notification"] = 4] = "Notification";
})(exports.Event || (exports.Event = {}));
var Event = exports.Event;
(function (Type) {
    Type[Type["User"] = 0] = "User";
    Type[Type["Order"] = 1] = "Order";
    Type[Type["Item"] = 2] = "Item";
})(exports.Type || (exports.Type = {}));
var Type = exports.Type;
