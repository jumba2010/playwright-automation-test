require('dotenv').config()
const {test, expect} = require('@playwright/test');
const { recurringDepositProductPage } = require('./page-objects/page-objects');
const constants = require('./page-objects/constants');
const {recurringDepositProductData}=require('./page-objects/test-data');
require('dotenv').config()
const { describe,beforeEach } = test;
const {formatDate}=require('./utils/DateTimeUtils');
const login =require('./hooks/login');
const baseUrl = process.env.BASE_URL

describe.only(constants.RECURRING_DEPOSIT_PRODUCT_TEST, () => {
  beforeEach(async ({context,page}) => {
    page = await context.newPage();
    await login(page)
  })

  test(constants.CREATE_RECURRING_DEPOSIT_PRODUCT, async ({context}) => {
  const page = await context.newPage()
  await page.goto(baseUrl+recurringDepositProductPage.createProductPage);
  await page.locator(recurringDepositProductPage.productName).fill(recurringDepositProductData.name);
  await page.locator(recurringDepositProductPage.productShortName).fill(recurringDepositProductData.shortName);
  await page.locator(recurringDepositProductPage.productDescription).fill(recurringDepositProductData.description);
  await page.locator(recurringDepositProductPage.nextButton1).click();
  await page.locator(recurringDepositProductPage.inMultiplesOf).fill(recurringDepositProductData.multipleOf);
  await page.locator(recurringDepositProductPage.nextButton2).click();
  await page.locator(recurringDepositProductPage.depositAmount).fill(recurringDepositProductData.depositAmount);
  await page.locator(recurringDepositProductPage.nextButton3).click();
  await page.locator(recurringDepositProductPage.minDepositTerm).fill(recurringDepositProductData.minDepositTerm);
  await page.locator(recurringDepositProductPage.minDepositTermType).selectOption(recurringDepositProductData.minDepositTermType,{force:true});
  await page.locator(recurringDepositProductPage.nextButton4).click();
  await page.locator(recurringDepositProductPage.fromDate).fill(formatDate(new Date()),{force:true});
  await page.locator(recurringDepositProductPage.addChartButton).click()
  await page.locator(recurringDepositProductPage.fromPeriod).fill(recurringDepositProductData.fromPeriod);
  await page.locator(recurringDepositProductPage.annualInterestRate).fill(recurringDepositProductData.annualInterestRate);
  await page.locator(recurringDepositProductPage.periodType).selectOption(recurringDepositProductData.periodType,{force:true});
  await page.locator(recurringDepositProductPage.nextButton5).click();
  await page.locator(recurringDepositProductPage.nextButton6).click();
  await page.locator(recurringDepositProductPage.nextButton7).click();
  await page.locator(recurringDepositProductPage.save).click();
  })


})










 



