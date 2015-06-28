import { BannerController } from "./controller";

angular
    .module('app.banner', [])
    .controller('BannerController', [BannersController]);

export var view = {
    url: "/banners",
    templateUrl: "/components/banner/view.html",
    controller: "BannerController as banner"
};
