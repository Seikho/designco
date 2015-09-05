require.config({
    baseUrl: 'scripts/libs',
    shim: {
        "jquery": {
            exports: "jQuery"
        },
        "bootstrap": {
            deps: ["jquery"],
        },
        "crossroads": {
            deps: ["signals"]
        }
    },
    map: {
        "css": "css",
        "text": "text"
    },
    deps: [
        "crossroads"
    ]
});
//# sourceMappingURL=config.js.map