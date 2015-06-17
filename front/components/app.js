import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import ngMaterial from 'angular-material';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';

import * as StoreApp from './store/store';

angular
    .module('app', [
        'ngNewRouter'
    ,   'ngMaterial'

    ,   'ngAnimate'
    ,   'ngAria'

    ,   'app.store'
    ])
    .controller('AppController', AppController)

    .config($mdThemingProvider => {
        var designcoYellow = $mdThemingProvider.extendPalette('yellow', {
                '500': 'f9f213'
            });
        $mdThemingProvider.definePalette('designco', designcoYellow);

        $mdThemingProvider.theme('default')
            .primaryPalette('designco');
    });

function AppController($router) {}

AppController.$inject = [
    '$router'
];

AppController.$routeConfig = [
    { path: '/' , redirectTo: '/store' }
,   { path: '/store' , component: 'store' }
];
