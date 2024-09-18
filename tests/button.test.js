const puppeteer = require('puppeteer');

describe('Button click test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(`file://${process.cwd()}/index.html`);
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Text changes when button is clicked', async () => {
    await page.click('button');
    const messageText = await page.$eval('#message', el => el.textContent);
    expect(messageText).toBe('New text displayed!');
  });
});
