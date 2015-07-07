import server = require("../../server");
import auth = require("./auth");
import register = require("./register");
import Boom = require("boom");

var authRoute = {
    method: "POST",
    path: "/login",
    handler: (request, reply) => {
        auth(request.payload)
            .then(reply)
            .catch(error => reply(Boom.badRequest(error)));
    }
}

var registerRoute = {
    method: "POST",
    path: "/register",
    handler: (request, reply) => {
        register(request.payload)
            .then(reply)
            .catch(error => reply(Boom.badRequest(error)));
    }
}

server.route(authRoute);
