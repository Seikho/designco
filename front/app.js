import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import CartService from "./components/cart/service";

var dependencies = [
    "ui.router",
    "ngMaterial"
];

var app = angular
    .module("app", dependencies)
    .factory("cartService", ["$http", CartService]);

export { app as default }