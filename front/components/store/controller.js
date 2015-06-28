'use strict';

class StoreController {
    constructor($state) {

        this.currentState = $state.$current.name;

        this.manualRedirect = function() {
            // normally used for behind-the-scenes redirecting
            // ...NOT for normal navigating.
            $state.go('test');
        };

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

StoreController.$inject = ['$state']

export { StoreController }
