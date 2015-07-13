var server = require("../../server");
var login = require("./login");
var register = require("./register");
var Boom = require("boom");
var loginRoute = {
    method: "POST",
    path: "/login",
    handler: function (request, reply) {
        login(request.payload)
            .then(reply)
            .catch(function (error) { return reply(Boom.badRequest(error)); });
    }
};
var registerRoute = {
    method: "POST",
    path: "/register",
    handler: function (request, reply) {
        register(request.payload)
            .then(reply)
            .catch(function (error) { return reply(Boom.badRequest(error)); });
    }
};
server.route(loginRoute);
server.route(registerRoute);
//# sourceMappingURL=web.js.map