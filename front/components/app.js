import angular from 'angular';
import ngNewRouter from 'angular-new-router';
import * as StoreApp from './store/store';

angular
    .module('app', [
        'ngNewRouter'
    ,   'app.store'
    ])
    .controller('AppController', AppController);

function AppController($router) {}

AppController.$inject = [
    '$router'
];

AppController.$routeConfig = [
    { path: '/' , redirectTo: '/store' }
,   { path: '/store' , component: 'store' }
];
