var read = require("./get");
var readWithItems = require("./getWithItems");
var server = require("../../server");
var Boom = require("boom");
var get = {
    path: "/orders",
    method: "GET",
    handler: function (request, reply) {
        read()
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var getUserOrders = {
    path: "/user/orders/{userId}",
    method: "GET",
    handler: function (request, reply) {
        read(request.params.userId)
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var getWithItems = {
    path: "/orders/{orderId}",
    method: "GET",
    handler: function (request, reply) {
        readWithItems(request.params.orderId)
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
server.route(get);
server.route(getUserOrders);
server.route(getWithItems);
//# sourceMappingURL=web.js.map