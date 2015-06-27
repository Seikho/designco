import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import ngMaterial from 'angular-material';
import * as Store from "./store/store";
import * as Nav from "./nav/nav";

var appModules = [
    "ngNewRouter",
    "ngMaterial",
    "app.store",
    "app.nav"
];

angular
    .module("app", appModules)
    .controller("AppController", ["$router", AppController])
    .config($mdThemingProvider => themeHandler($mdThemingProvider));

AppController.$routeConfig = [
    {
        path: "/",
        redirectTo: "/store"
    },
    {
        path: "/store",
        components: {
            left: "nav",
            right: "store"
        }
    }
];

function AppController($router) {
}

function themeHandler(provider) {
    var designCoHue = {
        "500": "f9f213"
    };
    var designcoPalette = provider.extendPalette("yellow", designCoHue);
    provider.definePalette("designco", designcoPalette);

    provider
        .theme("default")
        .primaryPalette("designco");
}
