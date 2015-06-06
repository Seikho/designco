import client = require("./client");
import log = require("")
import Promise = require("bluebird");
export = publish;

function publish(channel: string, message: string) {
	var redisClient = client();

	redisClient.on("connect", () => {
		
		redisClient.lpush([channel, message], (err, res) => {
			if (err) throw "PublishException: Unable to LPUSH: " + err;
			else redisClient.publish(channel, message);
		});
	});

	redisClient.on("error", err => {
		global.log.error("[PUB] RedisClient Error: " + err);
	});

}