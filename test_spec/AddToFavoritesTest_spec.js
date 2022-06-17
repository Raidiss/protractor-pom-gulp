const searchPage = require('../pages/SearchPage');
const favoritePage = require('../pages/FavoritePage');
const data = require('../data/' + browser.params.suite + '.json');

describe('Test favorites', function () {
  it('it should add and navigate to favorites', async function () {
    await searchPage.go();
    await searchPage.addToFavorite(data.itemToFavorite);
    await searchPage.goToFavorites();
  });

  it('it should validate the favorited item', async function () {
    await expect(favoritePage.getFavoriteItem(0)).toContain(data.favoriteItem);
  })

});