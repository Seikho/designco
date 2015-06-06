var kafka = require("kafka-node");
var client = new kafka.Client("localhost:2181", "designco");
module.exports = client;
