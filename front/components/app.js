import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import * as Store from "./store/store";
import * as Nav from "./nav/nav";

var appModules = [
    "ui.router",
    "ngMaterial",
    "app.store",
    "app.nav"
];

angular
    .module('app', appModules)
    .config(($stateProvider, $urlRouterProvider) => routeConfig($stateProvider, $urlRouterProvider))
    .config($mdThemingProvider => themeHandler($mdThemingProvider));

function routeConfig(provider, router) {
    router.otherwise('/nav');
    provider
        .state("nav", {
            url: "/nav",
            templateUrl: "/components/nav/view.html",
            controller: "NavController as nav"
        })
        .state('store', {
            url: "/store",
            templateUrl: "/components/store/view.html",
            controller: "StoreController as store"
        });
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
