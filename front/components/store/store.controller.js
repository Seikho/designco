'use strict';

class StoreController {
    constructor() {
        console.log('hi?')
        let self = this;
        self.sayHi = 'hi from StoreController!';

        self.thing = {
            sayHi: 'thingHi'
        }
    }
}

export { StoreController }
