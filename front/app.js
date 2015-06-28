import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import { CartService } from "./components/cart/service";
import * as Screen from "./components/screen/component";
import * as Nav from "./components/nav/component";
import * as Banner from "./components/banner/component";

var appModules = [
    "ui.router",
    "ngMaterial",
    "app.nav",
    "app.screen",
    "app.banner"
];

angular
    .module("app", appModules)
    .config(($stateProvider, $urlRouterProvider) => routeConfig($stateProvider, $urlRouterProvider))
    .config($mdThemingProvider => themeHandler($mdThemingProvider))
    .factory("app.cartService", CartService);


function routeConfig(provider, router) {
    router.otherwise("/screen");

    provider
        .state("screen", Screen.view)
        .state("banner", Banner.view);
}

function themeHandler(provider) {
    var designcoHue = {
        "500": "f9f213"
    };
    var designcoPalette = provider.extendPalette("yellow", designcoHue);
    provider.definePalette("designco", designcoPalette);

    provider
        .theme("default")
        .primaryPalette("designco");
}
