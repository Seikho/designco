var app_1 = require("../../app");
var controller_1 = require("./controller");
app_1.default.controller("ScreenController", ["cartService", "$http", controller_1.ScreenController]);
var view = {
    url: "/screen",
    templateUrl: "/components/screen/view.html",
    controller: "ScreenController as screen"
};
exports.default = view;
//# sourceMappingURL=component.js.map