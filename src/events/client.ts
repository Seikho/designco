import kafka = require("kafka-node");
export = newClient;

function newClient() {
	var client = new kafka.Client("localhost:2181", "designco");
	return client;
}



