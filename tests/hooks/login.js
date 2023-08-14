const {test, expect} = require('@playwright/test');
const { loginPage } = require('../page-objects/page-objects');
require('dotenv').config()
const username = process.env.USERNAME
const password = process.env.PASSWORD
const baseUrl = process.env.BASE_URL

const login = async (page) => {
  await page.goto(baseUrl);
  await page.locator(loginPage.username).fill(username);
  await page.locator(loginPage.password).fill(password);
  await page.click(loginPage.submitButton);

  // Wait for the page to navigate to the  home page
  await page.waitForSelector(loginPage.home)

  // Assert that the correct URL was loaded
  const url = page.url()
  expect(url).toBe(baseUrl+loginPage.homePage)
}


module.exports = login