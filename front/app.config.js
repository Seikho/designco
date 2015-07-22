import designco from "./app";
import screenComponent from "./components/screen/component";
import navView from "./components/nav/component";
import bannerComponent from "./components/banner/component";


designco
    .config(($stateProvider, $urlRouterProvider) => routeConfig($stateProvider, $urlRouterProvider))
    .config($mdThemingProvider => themeHandler($mdThemingProvider));

function routeConfig(provider, router) {
    router.otherwise("/screen");

    provider
        .state("screen", screenComponent)
        .state("banner", bannerComponent);
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
        //.dark();


    provider
        .theme("content")
        .primaryPalette("pink");
}