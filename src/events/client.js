var redis = require("redis");
function newClient() {
    var redisPort = global.config.redisPort || 6379;
    var redisHost = global.config.redisHost || "localhost";
    var client = redis.createClient(redisPort, redisHost);
    return client;
}
module.exports = newClient;
