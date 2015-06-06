var kafka = require("kafka-node");
var client = require("./client");
function subscribe(topics, callback) {
    var payloads = [];
    if (topics instanceof Array)
        topics.forEach(function (t) { return payloads.push({ topic: t, offset: 0 }); });
    else
        payloads.push({ topic: topics, offset: 0 });
    var consumer = new kafka.Consumer(client(), payloads, {
        groupId: "designco",
        autoCommit: true,
        autoCommitIntervalMs: 5000,
        fetchMaxWaitMs: 100,
        fetchMinBytes: 1,
        fetchMaxBytes: 1024 * 10,
        fromOffset: false,
        encoding: 'utf8'
    });
    consumer.on("message", callback);
}
module.exports = subscribe;
