// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#name')
      .assert.elementPresent('#email')
      .assert.elementPresent('#telephone')
      .assert.elementPresent('#company')
      .assert.elementPresent('#officialVisit')
      .assert.elementPresent('#escortRequired')
      .assert.containsText('h4', 'Sign In')
      .assert.elementCount('input', 6)
      .end();
  },
};
