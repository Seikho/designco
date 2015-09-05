import designco from "../../app";
import { NavViewModel } from './controller';

designco.controller('NavController', [NavViewModel]);

var view = {
    url: "/nav",
    templateUrl: "/components/nav/view.html",
    controller: "NavController as nav"
};

export { view as default }
