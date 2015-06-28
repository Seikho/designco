import { StoreController } from './controller';

angular
    .module('app.store', [])
    .controller('StoreController', [StoreController]);

export var view = {
    url: "/store",
    templateUrl: "/components/store/view.html",
    controller: "StoreController as store"
};
