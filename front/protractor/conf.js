// npm install -g protractor
// webdriver-manager update
// webdriver-manager start
// protractor conf.js

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['./screen/shop.list.item.spec.js'],
	
	onPrepare: function() {
		
	}
}