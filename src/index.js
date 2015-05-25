var hapi = require("hapi");
var log = require("./logger");

//TODO: Put port in config
var port = 45199;
var server = new hapi.Server();

server.connection({
    port: port
});

server.start(() => {
    log.info("Starting server on port " + port);
});
