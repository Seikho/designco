import { ScreenController } from "./controller";

angular
    .module("app.screen", [])
    .controller("ScreenController", ScreenController);

export var view = {
    url: "/screen",
    templateUrl: "/components/screen/view.html",
    controller: "ScreenController as screen"
};
