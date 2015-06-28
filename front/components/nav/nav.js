import { NavController } from './controller';

angular
    .module('app.nav', [])
    .controller('NavController', [NavController]);

export var view = {
    url: "/nav",
    templateUrl: "/components/nav/view.html",
    controller: "NavController as nav"
};
