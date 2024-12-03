const { Given, When, Then, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let page;

Given('I am on the ADHD home page', async function () {
  console.log('Launching browser in headed mode...');
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  console.log('Navigating to the home page...');
  
  // Increase the timeout to 10 seconds (or longer if needed)
  await page.goto('http://localhost:3000/', { timeout: 10000 }); // Replace with your actual home page URL
});

When('I search for {string}', async function (searchTerm) {
  console.log('Searching for:', searchTerm);
  const searchBox = await page.waitForSelector('input[name="q"]', { timeout: 10000 });
  await searchBox.fill(searchTerm);
  await searchBox.press('Enter');
  
  // Wait for results to load
  await page.waitForSelector('#results', { timeout: 10000 });
});

Then('the page title should contain {string}', async function (expectedTitle) {
  const title = await page.title();
  if (!title.includes(expectedTitle)) {
    throw new Error(`Expected title to contain "${expectedTitle}", but got "${title}"`);
  }
  console.log('Title is correct.');
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});
