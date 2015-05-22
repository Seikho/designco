import hapi = require("hapi");

var server = new hapi.Server();
server.connection({
	port: 45199
});

server.start(() => {
	
});
