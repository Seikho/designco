import { BannersController } from "./controller";

angular
    .module('app.banners', [])
    .controller('BannersController', [BannersController]);

export var view = {
    url: "/banners",
    templateUrl: "/components/banners/view.html",
    controller: "BannersController as banners"
};
