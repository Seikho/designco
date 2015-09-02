import designco from "../../app";
import { NavController } from './controller';

designco.controller('NavController', [NavController]);

var view = {
    url: "/nav",
    templateUrl: "/components/nav/view.html",
    controller: "NavController as nav"
};

export { view as default }
