import ko = require("knockout");
import xroads = require("crossroads");
import cart = require("../cart/service");
import ItemVM = require("../item/itemList");
export = NavViewModel;

class NavViewModel {
    constructor() {
        xroads.addRoute("/{route}", this.routeHandler);        
        xroads.parse(window.location.pathname);
    }

    menuItems = ko.observableArray<Route>([
        { title: "Screens", route: "/screen", itemType: "Screen" },
        { title: "Banners", route: "/banner", itemType: "Banner" },
        { title: "Vehicles", route: "/vehicle", itemType: "Vehicle" },
        { title: "Print", route: "/print", itemType: "Print" },
        { title: "Fabricated", route: "/fabricate", itemType: "Fabricate" },
        { title: "Traditional", route: "/traditional", itemType: "Traditional" }
    ]);

    currentView = ko.observable(this.menuItems()[0]);
    cartItems = cart.cartItems;
    cartItemCount = ko.computed(() => this.cartItems().length);
    showCartModal = ko.observable(false);
    
    itemsList = new ItemVM();
    
    loadRoute = (route: Route) => {
        this.currentView(<Route>route);
        history.pushState({}, "DesignCo Shop", (<Route>route).route);
        this.itemsList.itemType(route.itemType);
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
    itemType: string;
}