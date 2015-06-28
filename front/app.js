import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import * as Store from "./components/store/component";
import * as Nav from "./components/nav/component";
import * as Banners from "./components/banners/component";

var appModules = [
    "ui.router",
    "ngMaterial",
    "app.store",
    "app.nav",
    "app.banners"
];

angular
    .module("app", appModules)
    .config(($stateProvider, $urlRouterProvider) => routeConfig($stateProvider, $urlRouterProvider))
    .config($mdThemingProvider => themeHandler($mdThemingProvider));

function routeConfig(provider, router) {
    router.otherwise("/store");

    provider
        .state("store", Store.view)
        .state("banners", Banners.view);
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
