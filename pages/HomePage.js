const basePage = require('../pages/BasePage');
const data = require('../data/' + browser.params.suite + '.json');

const HomePage = function () {
  let _searchBtnClass = '.search-cta-btn'

  this.go = async function () {
    await basePage.navigateToURL(data.homePageUrl);
  };

  this.search = async function () {
    await element(by.css(_searchBtnClass)).click();
  }
};
HomePage.prototype = basePage;

module.exports = new HomePage();
