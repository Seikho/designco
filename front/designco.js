/// <reference path="../src/typings/angularjs/angular.d.ts" />
/// <reference path="../src/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../src/typings/angular-material/angular-material.d.ts" />
import * as angular from "angular";
import * as uiRouter from "angular-ui-router";
import * as ngMaterial from "angular-material";
import CartService from "./components/cart/service";

var dependencies = [
    "ui.router",
    "ngMaterial"
];

var app = angular
    .module("app", dependencies)
    .factory("cartService", CartService);

export { app as default }
