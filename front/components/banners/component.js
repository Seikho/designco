import { Controller } from "./controller";

angular
    .module('app.banners', [])
    .controller('BannerController', [Controller]);

export var view = {
    url: "/nav",
    templateUrl: "/components/banners/view.html",
    controller: "BannerController as banners"
};
