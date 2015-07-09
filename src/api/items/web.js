var server = require("../../server");
var Boom = require("boom");
var read = require("./read");
var create = require("./create");
var readAll = {
    path: "/items",
    method: "GET",
    handler: function (request, reply) {
        read()
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var readOne = {
    path: "/items/{id}",
    method: "GET",
    handler: function (request, reply) {
        read({ id: request.params.id })
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var readByType = {
    path: "/items/{type}/type",
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
server.route(readAll);
server.route(readOne);
server.route(createRoute);
server.route(readByType);
//# sourceMappingURL=web.js.map