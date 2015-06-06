var AppEvent;
(function (AppEvent) {
    AppEvent[AppEvent["NewUser"] = "newUser"] = "NewUser";
    AppEvent[AppEvent["UpdateUser"] = "updateUser"] = "UpdateUser";
    AppEvent[AppEvent["NewOrder"] = "newOrder"] = "NewOrder";
    AppEvent[AppEvent["UpdateOrder"] = "updateOrder"] = "UpdateOrder";
    AppEvent[AppEvent["CancelOrder"] = "cancelOrder"] = "CancelOrder";
})(AppEvent || (AppEvent = {}));
module.exports = AppEvent;
