'use strict';

<<<<<<< HEAD
export class StoreController {
    constructor() {
=======
class StoreController {
    constructor($state) {

        this.currentState = $state.$current.name;

        this.manualRedirect = function() {
            // normally used for behind-the-scenes redirecting
            // ...NOT for normal navigating.
            $state.go('test');
        };

>>>>>>> c362853034ba84e34e665a09b66ffa8e9e824ee1
        this.sayHi = 'hi from StoreController!';

        this.signs = [
            { title: 'Manager\'s special' },
            { title: 'fully sick' },
            { title: 'yeeeeeaaaaarrrrrgh' },
            { title: 'this day only' },
            { title: 'closing down sale' },
            { title: 'sunday special' },
            { title: 'will blow your mind' }
        ];

        this.thing = {
            sayHi: 'thingHi'
        }
    };
}
<<<<<<< HEAD
=======

StoreController.$inject = ['$state']

export { StoreController }
>>>>>>> c362853034ba84e34e665a09b66ffa8e9e824ee1
