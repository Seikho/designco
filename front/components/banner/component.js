var app_1 = require("../../app");
var controller_1 = require("./controller");
app_1.default.controller('BannerController', [controller_1.BannerController]);
var view = {
    url: "/banner",
    templateUrl: "/components/banner/view.html",
    controller: "BannerController as banner"
};
exports.default = view;
//# sourceMappingURL=component.js.map