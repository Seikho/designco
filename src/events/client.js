var kafka = require("kafka-node");
function newClient() {
    // TODO: Put kafka endpoint in config
    var client = new kafka.Client(global.config.kafkaUrl || "localhost:2181", "designco");
    return client;
}
module.exports = newClient;
