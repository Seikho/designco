import cfg = require("ls-config");
import Promise = require("bluebird");
cfg.config("liveDatabase", "designco.db");

import db = require("../src/store/db");
import chai = require("chai");
var expect = chai.expect;

describe("it db return tests", () => {

	it("knex should ", done => {
		db("screens")
			.select()
			.where({ id: 1 })
			.then(screens => screens[0])
			.then(screen => {
				expect(typeof screen === "object").to.be.true;
				done();
			}).catch(done);
	});

});