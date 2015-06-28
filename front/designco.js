import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import CartService from "./components/cart/service";

var dependencies = [
    "ui.router",
    "ngMaterial"
];

var module = angular
    .module("app", dependencies)
    .factory("cartService", CartService);

function temp() {
    var cartItems = [{
        id: 1,
        name: "Sample Item",
        quantity: 5
    }];

    function getCartItems() {
        return cartItems;
    }
}

export { module as default }
