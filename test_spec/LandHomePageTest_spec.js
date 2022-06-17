const homepage = require('../pages/HomePage')
const data = require('../data/' + browser.params.suite + '.json');

describe('Test home page', function () {
  it('it should navigate to the home page', async function () {
    await homepage.go();
  });

  it('it should validate Home Page Title', async function () {
    await expect(homepage.getPageTitle()).toContain(data.homeTitle);
  })

});