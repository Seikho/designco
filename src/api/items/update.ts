import db = require("../../store/db");
export = update;

function update(item: App.Item) {
	var id = item.id;
	delete item.id;

	return db("items")
		.update(item)
		.where({ id: id });
}