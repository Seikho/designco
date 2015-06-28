import * as StoreModule from './modules';

angular
    .module('app.store', [])
    .controller('StoreController', [StoreModule.controller]);

export var view = {
    url: "/store",
    templateUrl: "/components/store/view.html",
    controller: "StoreController as store"
};
