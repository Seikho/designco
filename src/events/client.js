var kafka = require("kafka-node");
function newClient() {
    var client = new kafka.Client("localhost:2181", "designco");
    return client;
}
module.exports = newClient;
