'use strict';

class StoreController {
    constructor() {
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
export { StoreController }
