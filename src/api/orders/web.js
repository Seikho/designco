var read = require("./read");
var create = require("./create");
var removeItem = require("./removeItem");
var addItem = require("./addItem");
var server = require("../../server");
var Boom = require("boom");
/**
 * Will retrieve all orders or a single order with all items attached
 */
var get = {
    path: "/orders/{orderId?}",
    method: "GET",
    handler: function (request, reply) {
        var id = request.params.orderId || null;
        read(id)
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
var createRoute = {
    path: "/orders",
    method: "PUT",
    handler: function (request, reply) {
        create(request.payload)
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var addItemRoute = {
    path: "/orders/addItem",
    method: "POST",
    handler: function (request, reply) {
        addItem(request.payload)
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
var removeItemRoute = {
    path: "/orders/removeItem",
    method: "POST",
    handler: function (request, reply) {
        removeItem(request.payload)
            .then(reply)
            .catch(function (error) { return reply(Boom.expectationFailed(error)); });
    }
};
server.route(get);
server.route(getUserOrders);
server.route(createRoute);
server.route(addItemRoute);
server.route(removeItemRoute);
//# sourceMappingURL=web.js.map