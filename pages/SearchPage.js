const basePage = require('../pages/BasePage');
const data = require('../data/' + browser.params.suite + '.json');

const SearchPage = function () {
  let _cookiesById = 'onetrust-accept-btn-handler';
  let _favoritesButtonByCss = '[aria-label="favourites 1"]';
 
  this.go = async function () {
    await basePage.navigateToURL(data.searchPageUrl);
  };

  this.addToFavorite = async function (label) {
    if (data.acceptCookies) {
      await element(by.id(_cookiesById)).click();
    }
    await element(by.css('[aria-label="' + label + '"]')).click();
  }

  this.goToFavorites = async function () {
    await element(by.css(_favoritesButtonByCss)).click();
  }
};
SearchPage.prototype = basePage;

module.exports = new SearchPage();