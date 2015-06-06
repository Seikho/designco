var kafka = require("kafka-node");
var client = require("./client");
var Promise = require("bluebird");
var producer = new kafka.Producer(client());
producer.createTopics(['users', 'orders'], false, function (err, data) {
    if (err) {
        global.log.error("Failed to create topics: " + err);
        return;
    }
    global.log.info("Successfully created topics: " + data);
});
function publish(payloads) {
    var promise = new Promise(function (resolve, reject) {
        producer.send(payloads, function (error, data) {
            if (error) {
                reject(error);
                return;
            }
            resolve(Promise.resolve(data));
        });
    });
    return promise;
}
module.exports = publish;
