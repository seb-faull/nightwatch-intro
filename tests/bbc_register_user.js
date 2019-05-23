module.exports = {
	'@tags': ['bbc'],
	'BBC register new user'(browser) {
		const userEmailInput 	  = 'test9756@gmail.com';
		const userPasswordInput   = 'test123456';
		const postCodeInput 	  = 'NW118AJ';
		const olderThan13Selector = '//*[@id="container"]/div/div/div/div[2]/div[2]/div[2]/div/div[3]/fieldset/div[1]/a[2]';
		const dobExplainerToggle  = '.field-explainer__toggle';
		const fieldDecortion 	  = '.field__decoration';

		browser
			.url('https://www.bbc.co.uk/')
			.waitForElementVisible('.hp-banner__text')
			.assert.containsText('.hp-banner__text', 'Welcome to the BBC')
			// Sign in page
			.click('#idcta-username')
			.useXpath()
			// Register
			.click('//*[@id="signin-page"]/div[2]/div[2]/div[2]/div[2]/a')
			.assert.containsText(
				olderThan13Selector,
				'13 or over')
			.click(olderThan13Selector)
			.useCss()
			.waitForElementVisible('.fields__legend')
			// D.O.B
			.assert.containsText('.fields__legend', "What's your date of birth?")
			.setValue('#day-input', '06')
			.setValue('#month-input', '06')
			.setValue('#year-input', '1990')
			.saveScreenshot('tests_output/screenshots/dob.png')
			.click(dobExplainerToggle)
			.waitForElementVisible('.field-explainer__inner')
			.waitForElementVisible(fieldDecortion)
			.click('#submit-button')
			// User Details
			.assert.containsText('.heading', 'Register with the BBC')
			.setValue('#user-identifier-input', userEmailInput)
			.setValue('#password-input', userPasswordInput)
			.assert.attributeContains('#password-input', 'type', 'password')
			.click('#toggle-password-type')
			.assert.attributeContains('#password-input', 'type', 'text')
			.setValue('#postcode-input', postCodeInput)
			.waitForElementVisible(fieldDecortion)
			.click('#gender-input')
			.waitForElementVisible('option[value=female]')
			.waitForElementVisible('option[value=male]')
			.waitForElementVisible('option[value=other]')
			.waitForElementVisible('option[value=prefer not to say]')
			.click('#gender-input option[value=male]')
	}
}
