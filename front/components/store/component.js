import { StoreController } from './controller';

console.log(StoreController);

angular
    .module('app.store', [])
<<<<<<< HEAD:front/components/store/component.js
    .controller('StoreController', [StoreController]);

export var view = {
    url: "/store",
    templateUrl: "/components/store/view.html",
    controller: "StoreController as store"
};
=======
    .controller('StoreController', StoreModule.controller);

// export var view = {
//     templateUrl: "/components/store/view.html",
//     controller: "StoreController as store"
// };
>>>>>>> c362853034ba84e34e665a09b66ffa8e9e824ee1:front/components/store/store.js
