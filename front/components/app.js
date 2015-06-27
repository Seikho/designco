import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import ngNewRouter from 'angular-new-router';
import ngMaterial from 'angular-material';
import * as Store from "./store/store";
import * as Nav from "./nav/nav";

var appModules = [
    "ui.router",
    // "ngNewRouter",
    "ngMaterial",
    "app.store",
    "app.nav"
];

angular
    .module('app', appModules)
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/state1');

        $stateProvider
            .state('state1', {
                url: '/state1'
            ,   templateUrl: '/front/components/state1.html'
            })
            .state('state2', {
                url: '/state2'
            ,   templateUrl: '/front/components/state2.html'
            })
            .state('store', {
                url: '/store'
            ,   templateUrl: '/front/components/store/store.html'
            ,   controller: 'StoreController as store'
            })
    })
    .config($mdThemingProvider => themeHandler($mdThemingProvider));

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

//
// .controller("AppController", ["$router", AppController])
//
// AppController.$routeConfig = [
//     {
//         path: "/",
//         redirectTo: "/store"
//     },
//     {
//         path: "/store",
//         components: {
//             left: "nav",
//             right: "store"
//         }
//     }
// ];
//
// function AppController($router) {
// }
