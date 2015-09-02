var angular = require("angular");
var uiRouter = require("angular-ui-router");
var ngMaterial = require("angular-material");
import CartService = require("./components/cart/service");


var dependencies = [
    "ui.router",
    "ngMaterial",
];

var app = angular
    .module("app", dependencies)
    .factory("cartService", ["$http", CartService]);

export { app as default }