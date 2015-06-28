import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import * as Store from "./components/store/store";
import * as Nav from "./components/nav/nav";

var appModules = [
    "ui.router",
    "ngMaterial",
    "app.store",
    "app.nav"
];

angular
    .module("app", appModules)
    .config(($stateProvider, $urlRouterProvider) => routeConfig($stateProvider, $urlRouterProvider))
    .config($mdThemingProvider => themeHandler($mdThemingProvider));

function routeConfig(provider, router) {
    router.otherwise("/");

    provider
        // add your imports back here...
        .state('store', {
            url: '/',
            templateUrl: './components/store/view.html',
            controller: 'StoreController as store'
        })
        .state('test', {
            url: '/test',
            templateUrl: './components/test/view.html'
        })

    // provider
    //     .state("designco", {
    //         url: "/",
    //         views: {
    //             "nav": Nav.view,
    //             "store": Store.view
    //         }
    //     });
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
