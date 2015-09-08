var server = require("../../server");
var Boom = require("boom");
var read = require("./read");
var create = require("./create");
var update = require("./update");
var readByType = {
    path: "/items/{type}",
    method: "GET",
    handler: function (request, reply) {
        read({ itemType: request.params.type })
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var createRoute = {
    path: "/items",
    method: "PUT",
    handler: function (request, reply) {
        create(request.payload)
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var updateRoute = {
    path: "/items",
    method: "POST",
    handler: function (request, reply) {
        update(request.payload)
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
server.route(createRoute);
server.route(readByType);
server.route(updateRoute);
//# sourceMappingURL=web.js.map