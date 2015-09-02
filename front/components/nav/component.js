var app_1 = require("../../app");
var controller_1 = require('./controller');
app_1.default.controller('NavController', [controller_1.NavController]);
var view = {
    url: "/nav",
    templateUrl: "/components/nav/view.html",
    controller: "NavController as nav"
};
exports.default = view;
//# sourceMappingURL=component.js.map