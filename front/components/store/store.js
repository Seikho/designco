import * as StoreModule from './store.module';

angular
    .module('app.store', [
    ])
    .controller('StoreController', StoreModule.controller);
