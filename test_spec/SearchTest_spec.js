const homepage = require('../pages/HomePage')
const data = require('../data/' + browser.params.suite + '.json');

describe('Test search page', function () {
  it('it should navigate to the search page', async function () {
    await homepage.go();
    await homepage.search();
  });

  it('it should validate Search Page Title', async function () {
    await expect(homepage.getPageTitle()).toContain(data.searchTitle);
  })

});