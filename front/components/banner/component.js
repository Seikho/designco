import { BannerController } from "./controller";

angular
    .module('app.banner', [])
    .controller('BannerController', [BannerController]);

export var view = {
    url: "/banner",
    templateUrl: "/components/banner/view.html",
    controller: "BannerController as banner"
};
