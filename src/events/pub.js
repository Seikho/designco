var client = require("./client");
function publish(channel, message) {
    var redisClient = client();
    redisClient.on("connect", function () {
        redisClient.lpush([channel, message], function (err, res) {
            if (err)
                throw "PublishException: Unable to LPUSH: " + err;
            else
                redisClient.publish(channel, message);
        });
    });
    redisClient.on("error", function (err) {
        global.log.error("[PUB] RedisClient Error: " + err);
    });
}
module.exports = publish;
