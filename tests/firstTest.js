module.exports = {
	'My first test case'(browser) {
		browser
			.url('https://www.bbc.co.uk/')
			.waitForElementVisible('.hp-banner__text')
			.assert.containsText(".hp-banner__text", "Welcome to the BBC");
	}
}
