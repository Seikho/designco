import kafka = require("kafka-node");
export = newClient;

function newClient() {
	// TODO: Put kafka endpoint in config
	var client = new kafka.Client(global.config.kafkaUrl || "localhost:2181", "designco");
	return client;
}



