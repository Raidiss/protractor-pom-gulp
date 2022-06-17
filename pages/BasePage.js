const BasePage = function () {
  this.navigateToURL = async function (url) {
    await browser.waitForAngularEnabled(false);
    await browser.get(url);
  };

  this.getPageTitle = async function () {
    return await browser.getTitle();
  }

};

module.exports = new BasePage();
