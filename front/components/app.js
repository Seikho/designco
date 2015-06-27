import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import ngMaterial from 'angular-material';
import * as StoreApp from './store/component';

var appModules = [
    "ngNewRouter",
    "ngMaterial",
    "app.store"
];

angular
    .module('app', appModules)
    .controller('AppController', AppController)
    .config(themeHandler);

function AppController(router) {

}

function themeHandler(provider) {
    var designCoHue = { "500": "f9f213" };
    var designcoPalette = provider.extendPalette("yellow", designCoHue);
    provider.definePalette("designco", designcoPalette);

    provider
        .theme("default")
        .primaryPalette("designco");
}

AppController.$inject = [
    '$router'
];

AppController.$routeConfig = [{
    path: '/',
    redirectTo: '/store'
}, {
    path: '/store',
    component: 'store'
}];
