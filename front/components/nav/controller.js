export class NavController {
	constructor() {
		this.self = this;

        this.menuItems = [
            { title: "Screens", view: "screen" },
            { title: 'Banners', view: "banner" },
            { title: 'Vehicles', view: "vehicle" },
            { title: 'Print', view: "print" },
            { title: 'Fabricated', view: "fabricate" },
            { title: 'Traditional', view: "traditional" }
        ];

		this.currentView = this.menuItems[0];

		this.changeView = newView => {
			this.currentView = newView;
		}
	}
}
