import server = require("../../server");
import auth = require("./auth");
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
