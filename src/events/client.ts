import kafka = require("kafka-node");
export = client;

var client = new kafka.Client("localhost:2181", "designco");

