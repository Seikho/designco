import kafka = require("kafka-node");
import client = require("./client");
export = subscribe;


function subscribe(topics: string|string[], callback: (message: string) => void) {
	var consumer = new kafka.Consumer(client(), topics, )
}

