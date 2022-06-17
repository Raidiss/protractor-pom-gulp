const basePage = require('../pages/BasePage');

const FavoritePage = function () {
    let _favoriteCardByCss = '.card-title';

    this.getFavoriteItem = async function (index) {
        return await element(by.css(_favoriteCardByCss)).getText();
    }
};
FavoritePage.prototype = basePage;

module.exports = new FavoritePage();
