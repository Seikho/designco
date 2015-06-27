import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import ngMaterial from 'angular-material';

var appModules = [
    "ngNewRouter",
    "ngMaterial",
    "app.store",
    "app.nav"
];

angular
    .module('app', appModules)
    .controller('AppController', ['$router', AppController])
    .config($mdThemingProvider => themeHandler($mdThemingProvider));

function AppController($router) {
    $router.config([{
        path: '/',
        redirectTo: '/store'
    }, {
        path: '/store',
        component: 'store'
    }])
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
