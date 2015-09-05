import ko = require("knockout");
export = NavViewModel;

class NavViewModel {
    constructor() { }
    
    menuItems = ko.observableArray<Route>([
        { title: "Screens", route: "/screen" },
        { title: "Banners", route: "/banner" },
        { title: "Vehicles", route: "/vehicle" },
        { title: "Print", route: "/print" },
        { title: "Fabricated", route: "/fabricate" },
        { title: "Traditional", route: "/traditional" }
    ]);

    currentView = ko.observable(this.menuItems()[0]);
}

interface Route {
    title: string;
    route: string;
}