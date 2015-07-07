var create = require("./put");
var read = require("./get");
var update = require("./post");
var getRoute = {
    path: "/screens",
    method: "GET",
    handler: function (request, reply) {
        read()
            .then(reply)
            .catch(reply);
    }
};
var putRoute = {
    path: "/screens",
    method: "PUT",
    handler: function (request, reply) {
        create(request.payload)
            .then(reply)
            .catch(reply);
    }
};
var postRoute = {
    path: "/screens",
    method: "POST",
    handler: function (request, reply) {
        update(request.payload)
            .then(reply)
            .catch(reply);
    }
};
