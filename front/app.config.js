var app_1 = require("./app");
var component_1 = require("./components/screen/component");
var navView = require("./components/nav/component");
var component_2 = require("./components/banner/component");
app_1.default
    .config(function ($stateProvider, $urlRouterProvider) { return routeConfig($stateProvider, $urlRouterProvider); })
    .config(function ($mdThemingProvider) { return themeHandler($mdThemingProvider); });
function routeConfig(provider, router) {
    router.otherwise("/screen");
    provider
        .state("screen", component_1.default)
        .state("banner", component_2.default);
}
function themeHandler(provider) {
    var designcoHue = {
        "500": "f9f213"
    };
    var designcoPalette = provider.extendPalette("yellow", designcoHue);
    provider.definePalette("designco", designcoPalette);
    provider
        .theme("default")
        .primaryPalette("grey", {
        "hue-3": "900"
    })
        .accentPalette("yellow");
    //.dark();
    provider
        .theme("content")
        .primaryPalette("pink");
}
//# sourceMappingURL=app.config.js.map