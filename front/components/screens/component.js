import { ScreenController } from "./controller";

angular
    .module("app.screen", [])
    .controller("ScreenController", ScreenController);

export var view = {
    url: "/screens",
    templateUrl: "/components/screens/view.html",
    controller: "ScreenController as screen"
};
