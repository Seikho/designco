import { StoreController } from './controller';

console.log(StoreController);

angular
    .module('app.store', [])
    .controller('StoreController', [StoreController]);

export var view = {
    url: "/store",
    templateUrl: "/components/store/view.html",
    controller: "StoreController as store"
};
