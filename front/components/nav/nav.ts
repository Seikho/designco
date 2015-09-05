import ko = require("knockout");
import xroads = require("crossroads");
export = NavViewModel;

class NavViewModel {
    constructor() {
        xroads.addRoute("/{route}", this.routeHandler);
        
        xroads.parse(window.location.hash);
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
        this.currentView(<Route>route);
        history.pushState({}, "DesignCo Shop", (<Route>route).route);

    }

    routeHandler = (section: string) => {
        console.log("Request: " + section);
        var routeItem = this.menuItems().filter(mi => mi.route.slice(1) === section)[0];
        if (!routeItem) return;

        this.loadRoute(routeItem);
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