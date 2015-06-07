var AppEvent;
(function (AppEvent) {
    AppEvent[AppEvent["NewUser"] = "/user/new/*"] = "NewUser";
    AppEvent[AppEvent["UpdateUser"] = "/user/update/*"] = "UpdateUser";
    AppEvent[AppEvent["NewOrder"] = "/order/new/*"] = "NewOrder";
    AppEvent[AppEvent["UpdateOrder"] = "/order/update/*"] = "UpdateOrder";
    AppEvent[AppEvent["CancelOrder"] = "/order/cancel/*"] = "CancelOrder";
})(AppEvent || (AppEvent = {}));
module.exports = AppEvent;
