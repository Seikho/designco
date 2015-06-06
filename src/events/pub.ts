import redis = require("redis");
import client = require("./client");
import log = require("")
import Promise = require("bluebird");
export = publish;

var producer = new kafka.Producer(client());
producer.createTopics(['users', 'orders'], false, (err, data) => {
	if (err) {
		global.log.error("Failed to create topics: " + err);
		return;
	}
	global.log.info("Successfully created topics: " + data);
});

function createTopics(payloads: kafka.ProduceRequest[]) {
	payloads.forEach(payload => {
		
	});
}

function publish(payloads: kafka.ProduceRequest[]): Promise<{}> {
	var promise = new Promise((resolve, reject) => {
		producer.send(payloads, (error, data) => {
			if (error) {
				reject(error);
				return;
			}
			resolve(Promise.resolve(data));
		});
	});
	return promise;	
}