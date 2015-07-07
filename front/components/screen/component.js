import designco from "../../designco";
import { ScreenController } from "./controller";

designco.controller("ScreenController", ["cartService", ScreenController]);

var view = {
    url: "/screen",
    templateUrl: "/components/screen/view.html",
    controller: "ScreenController as screen"
};

export { view as default }
