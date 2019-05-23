module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery                        = 'Elon Musk';
        const mainQueryInputSelector           = 'input[name="as_q"]';
        const languageDropdownOpenerSelector   = '#lr_button';
        const languageDropdownValueSelector    = '.goog-menuitem[value="lang_no"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector  = '.goog-menuitem[value="m"]';
        const submitButtonSelector             = '.jfk-button[type="submit"]';
        const resultsPageQuerySelector         = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector      = '[aria-label="Search Norwegian pages"]';
        const resultsPageLastUpdateSelector    = '[aria-label="Past month"]';

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenerSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Elon+Musk', `URL Params: Query is ${mainQuery}`)
            .assert.urlContains('lr=lang_no', 'URL Params: Language is Norwegian')
            .assert.urlContains('as_qdr=m', 'URL Params: Time period is last month');

        // browser.expect.element(resultsPageQuerySelector).to.be.visible;
        browser.assert.visible(resultsPageQuerySelector, `UI: ${mainQuery} is set in the Query input`);
        browser.assert.containsText(resultsPageLanguageSelector, 'Search Norwegian pages', 'UI: Language is set to Norwegian');
        browser.assert.containsText(resultsPageLastUpdateSelector, 'Past month', 'UI: Last update is set to Past Month');

        browser.saveScreenshot('tests_output/google.png');
    }
}
