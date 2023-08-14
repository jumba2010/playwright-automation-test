require('dotenv').config()
const { test, expect } = require('@playwright/test');
const { savingsProductPage } = require('./page-objects/page-objects');
const constants = require('./page-objects/constants');
const { savingsProductData } = require('./page-objects/test-data');
require('dotenv').config()
const { describe, beforeEach } = test;
const { formatDate } = require('./utils/DateTimeUtils');
const login = require('./hooks/login');
const baseUrl = process.env.BASE_URL

describe.only(constants.SAVINGS_PRODUCT_TEST, () => {
  beforeEach(async ({ context, page }) => {
    page = await context.newPage();
    await login(page)
  })

  test(constants.CREATE_SAVINGS_PRODUCT, async ({ context }) => {
    const page = await context.newPage()
    await setUpCommonOperations(page)
    await page.locator(savingsProductPage.nextButton6).click();
    await page.locator(savingsProductPage.save).click();

  })

  test(constants.SET_UP_CASH_ON_THE_SAVINGS_PRODUCT, async ({ context }) => {
    const page = await context.newPage()
    await setUpCommonOperations(page)

    //Set up cash accounting configration
    await page.locator(savingsProductPage.cashOption).check()
    //First We need to force and show the element, then We select an option
    const savingsReferenceAccountId = await page.$(savingsProductPage.savingsReferenceAccountId);
    await page.evaluate(element => element.style.display = 'block', savingsReferenceAccountId);
    await page.locator(savingsProductPage.savingsReferenceAccountId).selectOption(savingsProductData.savingsReferenceAccountId);

    const overdraftPortfolioControlId = await page.$(savingsProductPage.overdraftPortfolioControlId);
    await page.evaluate(element => element.style.display = 'block', overdraftPortfolioControlId);
    await page.locator(savingsProductPage.overdraftPortfolioControlId).selectOption(savingsProductData.savingsReferenceAccountId);

    const savingsControlAccountId = await page.$(savingsProductPage.savingsControlAccountId);
    await page.evaluate(element => element.style.display = 'block', savingsControlAccountId);
    await page.locator(savingsProductPage.savingsControlAccountId).selectOption(savingsProductData.savingsControlAccountId);

    const transfersInSuspenseAccountId = await page.$(savingsProductPage.transfersInSuspenseAccountId);
    await page.evaluate(element => element.style.display = 'block', transfersInSuspenseAccountId);
    await page.locator(savingsProductPage.transfersInSuspenseAccountId).selectOption(savingsProductData.transfersInSuspenseAccountId);


    const interestOnSavingsAccountId = await page.$(savingsProductPage.interestOnSavingsAccountId);
    await page.evaluate(element => element.style.display = 'block', interestOnSavingsAccountId);
    await page.locator(savingsProductPage.interestOnSavingsAccountId).selectOption(savingsProductData.interestOnSavingsAccountId);

    const writeOffAccountId = await page.$(savingsProductPage.writeOffAccountId);
    await page.evaluate(element => element.style.display = 'block', writeOffAccountId);
    await page.locator(savingsProductPage.writeOffAccountId).selectOption(savingsProductData.writeOffAccountId);


    const incomeFromFeeAccountId = await page.$(savingsProductPage.incomeFromFeeAccountId);
    await page.evaluate(element => element.style.display = 'block', incomeFromFeeAccountId);
    await page.locator(savingsProductPage.incomeFromFeeAccountId).selectOption(savingsProductData.incomeFromFeeAccountId);


    const incomeFromPenaltyAccountId = await page.$(savingsProductPage.incomeFromPenaltyAccountId);
    await page.evaluate(element => element.style.display = 'block', incomeFromPenaltyAccountId);
    await page.locator(savingsProductPage.incomeFromPenaltyAccountId).selectOption(savingsProductData.incomeFromPenaltyAccountId);


    const incomeFromInterestId = await page.$(savingsProductPage.incomeFromInterestId);
    await page.evaluate(element => element.style.display = 'block', incomeFromInterestId);
    await page.locator(savingsProductPage.incomeFromInterestId).selectOption(savingsProductData.incomeFromInterestId);


    await page.locator(savingsProductPage.nextButton6).click();
    await page.locator(savingsProductPage.save).click();

  })

  test(constants.EDIT_LOAN_PRODUCT, async ({ context }) => {
    const page = await context.newPage()
    await page.goto(baseUrl + savingsProductPage.editProductPage);
    await page.locator(savingsProductPage.productName).fill(savingsProductData.name);
    await page.locator(savingsProductPage.productShortName).fill(savingsProductData.shortName);
    await page.locator(savingsProductPage.save).click();
  })

})

const setUpCommonOperations = async (page) => {
  await page.goto(baseUrl + savingsProductPage.createProductPage);
  await page.locator(savingsProductPage.productName).fill(savingsProductData.name);
  await page.locator(savingsProductPage.productShortName).fill(savingsProductData.shortName);
  await page.locator(savingsProductPage.nextButton1).click();
  await page.locator(savingsProductPage.inMultiplesOf).fill(savingsProductData.multipleOf);
  await page.locator(savingsProductPage.nextButton2).click();
  await page.locator(savingsProductPage.nominalAnualInterestRate).fill(savingsProductData.nominalAnualInterestRate);
  await page.locator(savingsProductPage.nextButton3).click();
  await page.locator(savingsProductPage.nextButton4).click();
  await page.locator(savingsProductPage.nextButton5).click();
}














