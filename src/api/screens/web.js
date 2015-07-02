var read = require("./get");
var create = require("./put");
var Boom = require("boom");
var getRoute = {
    path: "/screens",
    method: "GET",
    handler: function (request, reply) {
        read()
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var putRoute = {
    path: "/screens",
    method: "PUT",
    handler: function (request, reply) {
        create(request.payload)
            .then(reply)
            .catch(function (error) { return reply(Boom.badRequest(error)); });
    }
};
