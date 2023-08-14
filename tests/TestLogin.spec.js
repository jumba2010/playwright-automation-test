require('dotenv').config()

const {test, expect} = require('@playwright/test');
const { loginPage } = require('./page-objects/page-objects');
const constants = require('./page-objects/constants');
const { describe } = test;
const username = process.env.USERNAME
const password = process.env.PASSWORD
const baseUrl = process.env.BASE_URL

describe.only(constants.LOGIN_SCENARIO, () => {

   //Test Login positive path
  test(constants.LOGIN_SUCCESS, async ({page}) => {
    await page.goto(baseUrl);
    await page.locator(loginPage.username).fill(username);
    await page.locator(loginPage.password).fill(password);
    await page.click(loginPage.submitButton);
   
    // Wait for the page to navigate to the  home page
    await page.waitForSelector(loginPage.home)
   
    // Assert that the correct URL was loaded
    const url = page.url()
    expect(url).toBe(baseUrl+loginPage.homePage)

  })


   //Test Login with wrong username
  test(constants.LOGIN_WRONG_USERNAME, async ({page}) => {
    await page.goto(baseUrl);
    await page.locator(loginPage.username).fill("Wrong_Username");
    await page.locator(loginPage.password).fill(password);
    await page.click(loginPage.submitButton);

    // Wait for the error message to be displayed
    await page.waitForSelector(loginPage.errorMessage)

    // Assert that the error message is displayed
   const error = await page.$(loginPage.errorMessage)
   expect(error).not.toBeNull()

    // Assert that the error message has the correct text
    const errorText = await page.evaluate(error => error.textContent, error)
    expect(errorText.length).toBeGreaterThan(0)

    // Assert that the URL has not changed
    const url = page.url()
    expect(url).toBe(baseUrl+'#/')
  })


  //Test Login with wrong password
  test(constants.LOGIN_WRONG_PASSWORD, async ({page}) => {
    await page.goto(baseUrl);
    await page.locator(loginPage.username).fill(username);
    await page.locator(loginPage.password).fill("Wrong_password");
    await page.click(loginPage.submitButton);

     // Wait for the error message to be displayed
     await page.waitForSelector(loginPage.errorMessage)

     // Assert that the error message is displayed
    const error = await page.$(loginPage.errorMessage)
    expect(error).not.toBeNull()

    // Assert that the error message has the correct text
    const errorText = await page.evaluate(error => error.textContent, error)
    expect(errorText.length).toBeGreaterThan(0)

    // Assert that the URL went back to login
    const url = page.url()
    expect(url).toBe(baseUrl+'#/')
  })
  })



  








 



