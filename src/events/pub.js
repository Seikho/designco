var client = require("./client");
function publish(channel, messages) {
    var redisClient = client();
    redisClient.on("connect", function () {
        if (typeof messages === 'string') {
            redisClient.publish(channel, messages);
        }
        else if (messages instanceof Array) {
            messages.forEach(function (message) { return redisClient.publish(channel, message); });
        }
    });
    redisClient.on("error", function (err) {
        global.log.error("[PUB] RedisClient Error: " + err);
    });
}
module.exports = publish;
