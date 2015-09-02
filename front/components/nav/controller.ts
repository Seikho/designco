export class NavController {
        constructor() {}
        
        menuItems = [
                { title: "Screens", view: "screen" },
                { title: "Banners", view: "banner" },
                { title: "Vehicles", view: "vehicle" },
                { title: "Print", view: "print" },
                { title: "Fabricated", view: "fabricate" },
                { title: "Traditional", view: "traditional" }
        ];

        currentView = this.menuItems[0];

        changeView = newView => {
                this.currentView = newView;
        }
}
