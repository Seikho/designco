import designco from "./designco";
import CartService from "./components/cart/service";
import screenView from "./components/screen/component";
import navView from "./components/nav/component";
import bannerView from "./components/banner/component";

var dependencies = [
    "ui.router",
    "ngMaterial"
];

designco
    .config(($stateProvider, $urlRouterProvider) => routeConfig($stateProvider, $urlRouterProvider))
    .config($mdThemingProvider => themeHandler($mdThemingProvider));

function routeConfig(provider, router) {
    router.otherwise("/screen");

    provider
        .state("screen", screenView)
        .state("banner", bannerView);
}

function themeHandler(provider) {
    var designcoHue = {
        "500": "f9f213"
    };
    var designcoPalette = provider.extendPalette("yellow", designcoHue);
    provider.definePalette("designco", designcoPalette);

    provider
        .theme("default")
        .primaryPalette("grey", {
            "hue-3": "900"
        })
        .accentPalette("yellow")
        .dark();


    provider
        .theme("designco")
        .primaryPalette("designco");
}
