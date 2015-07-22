import designco from "../../app";
import { BannerController } from "./controller";

designco.controller('BannerController', [BannerController]);

var view = {
    url: "/banner",
    templateUrl: "/components/banner/view.html",
    controller: "BannerController as banner"
};

export { view as default }
