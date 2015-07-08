var server = require("../../server");
var Boom = require("boom");
var read = require("./get");
var create = require("./put");
var getAll = {
    path: "/items",
    method: "GET",
    handler: function (request, reply) {
        read()
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var getOne = {
    path: "/items/{id}",
    method: "GET",
    handler: function (request, reply) {
        read(request.params.id)
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var put = {
    path: "/items",
    method: "PUT",
    handler: function (request, reply) {
        create(request.payload)
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
server.route(getAll);
server.route(getOne);
server.route(put);
