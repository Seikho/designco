import ko = require("knockout");
import xroads = require("crossroads");
export = NavViewModel;

class NavViewModel {
    constructor() {
        
    }

    menuItems = ko.observableArray<Route>([
        { title: "Screens", route: "/screen" },
        { title: "Banners", route: "/banner" },
        { title: "Vehicles", route: "/vehicle" },
        { title: "Print", route: "/print" },
        { title: "Fabricated", route: "/fabricate" },
        { title: "Traditional", route: "/traditional" }
    ]);

    currentView = ko.observable(this.menuItems()[0]);
    loadRoute = (route: Route) => {
        this.currentView(route);
        history.pushState({}, "DesignCo Shop", route.route);
    }
    routeClass = (route: Route) => {
        var current = this.currentView();

        return current.route === route.route
            ? "active"
            : "";
    }
}

interface Route {
    title: string;
    route: string;
}