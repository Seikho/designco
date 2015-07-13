import server = require("../../server");
import login = require("./login");
import register = require("./register");
import Boom = require("boom");

var loginRoute = {
    method: "POST",
    path: "/login",
    handler: (request, reply) => {
        login(request.payload)
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

server.route(loginRoute);
server.route(registerRoute);