import designco from "../../designco";
import { ScreenController } from "./controller";

designco.controller("ScreenController", [ScreenController]);

var view = {
    url: "/screen",
    templateUrl: "/components/screen/view.html",
    controller: "ScreenController as screen"
};

export { view as default }
