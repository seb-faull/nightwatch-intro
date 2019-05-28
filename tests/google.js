module.exports = {
    '@tags': ['google'],
    //'@disabled': true,
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';
        const page = browser.page.googleAdvancedSearch();

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_no')
            .selectFilter('@lastUpdateDropdown', 'm')
            // .perform( () => { debugger; })
            .search();

        browser
            .assert.urlContains('as_q=Elon+Musk', `URL Params: Query is ${mainQuery}`)
            .assert.urlContains('lr=lang_no', 'URL Params: Language is Norwegian')
            .assert.urlContains('as_qdr=m', 'URL Params: Time period is last month');

        const resultsPageQuerySelector      = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector   = '[aria-label="Search Norwegian pages"]';
        const resultsPageLastUpdateSelector = '[aria-label="Past month"]';

        browser.assert.visible(resultsPageQuerySelector, `UI: ${mainQuery} is set in the Query input`);
        browser.assert.containsText(resultsPageLanguageSelector, 'Search Norwegian pages', 'UI: Language is set to Norwegian');
        browser.assert.containsText(resultsPageLastUpdateSelector, 'Past month', 'UI: Last update is set to Past Month');

        browser.saveScreenshot('tests_output/google.png');
    }
}
