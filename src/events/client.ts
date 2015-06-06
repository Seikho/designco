import redis = require("redis");
export = newClient;

function newClient(): redis.RedisClient {
	var redisPort = global.config.redisPort || 6379;
	var redisHost = global.config.redisHost || "localhost";
	
	var client = redis.createClient(redisPort, redisHost);
	return client;
}