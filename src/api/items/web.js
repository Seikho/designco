var server = require("../../server");
var read = require("./get");
var getAll = {
    path: "/items",
    method: "GET",
    handler: function (request, reply) {
        read()
            .then(reply)
            .catch(reply);
    }
};
var getOne = {
    path: "/items/{id}",
    method: "GET",
    handler: function (request, reply) {
        read(request.params.id)
            .then(reply)
            .catch(reply);
    }
};
server.route(getAll);
server.route(getOne);
