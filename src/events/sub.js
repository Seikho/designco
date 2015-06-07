var client = require("./client");
function subscribe(channels, callback) {
    var redisClient = client();
    redisClient.on("ready", function () {
        if (channels instanceof Array)
            channels.forEach(function (c) { return redisClient.psubscribe(c); });
        else
            redisClient.psubscribe(channels);
    });
    redisClient.on("subscribe", function (channel, count) {
        global.log.debug("Client successfully subscribed to '" + channel + "' (" + count + ")");
    });
    redisClient.on("message", function (channel, message) {
        callback(channel, message);
    });
    redisClient.on("error", function (err) {
        global.log.error("[SUB] RedisClient error: " + err);
    });
}
module.exports = subscribe;
