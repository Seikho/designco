import * as StoreModule from './modules';

angular
    .module('app.store', [])
    .controller('StoreController', [StoreModule.controller]);
