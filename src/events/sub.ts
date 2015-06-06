import kafka = require("kafka-node");
import client = require("./client");
export = subscribe;

function subscribe(topics: string|string[], callback: (message: string) => void) {
	var payloads = [];
	if (topics instanceof Array)
		topics.forEach(t => payloads.push({ topic: t, offset: 0 }));
	else payloads.push({ topic: topics, offset: 0});

	var consumer = new kafka.Consumer(client(), payloads, {
		groupId: "designco",
		autoCommit: true,
		autoCommitIntervalMs: 5000,
		fetchMaxWaitMs: 100,
		fetchMinBytes: 1,
		fetchMaxBytes: 1024*10,
		fromOffset: false,
		encoding: 'utf8'
	});
	
	consumer.on("message", callback);
}

