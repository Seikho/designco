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

        this.menuItems = [
            { title: 'signs' },
            { title: 'banners' },
            { title: 'vehicles' },
            { title: 'print' },
            { title: 'fabricated' },
            { title: 'traditional' }
        ];

        this.activeMenuItem = self.menuItems[1];

        this.thing = {
            sayHi: 'thingHi'
        }
    };



}

export { StoreController }
