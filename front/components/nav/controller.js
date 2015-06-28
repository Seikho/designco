export class NavController {
	constructor() {
		this.self = this;

        this.menuItems = [
            { title: 'Store', view: "store" },
            { title: 'Banners', view: "banners" },
            { title: 'Vehicles', view: "vehicles" },
            { title: 'Print', view: "print" },
            { title: 'Fabricated', view: "fabricated" },
            { title: 'Traditional', view: "traditional" }
        ];

		this.currentView = this.menuItems[0];

		this.changeView = newView => {
			this.currentView = newView;
		}
	}
}
