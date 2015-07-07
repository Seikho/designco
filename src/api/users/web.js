var server = require("../../server");
var auth = require("./auth");
var register = require("./register");
var Boom = require("boom");
var authRoute = {
    method: "POST",
    path: "/login",
    handler: function (request, reply) {
        auth(request.payload)
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
server.route(authRoute);
