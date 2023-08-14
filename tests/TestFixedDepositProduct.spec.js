require('dotenv').config()
const {test, expect} = require('@playwright/test');
const { fixedDepositProductPage } = require('./page-objects/page-objects');
const constants = require('./page-objects/constants');
const {fixedDepositProductData}=require('./page-objects/test-data');
require('dotenv').config()
const { describe,beforeEach } = test;
const {formatDate}=require('./utils/DateTimeUtils');
const login =require('./hooks/login');
const baseUrl = process.env.BASE_URL

describe.only(constants.FIXED_DEPOSIT_PRODUCT_TEST, () => {
  beforeEach(async ({context,page}) => {
    page = await context.newPage();
    await login(page)
  })

  test(constants.CREATE_FIXED_DEPOSIT_PRODUCT, async ({context}) => {
  const page = await context.newPage()
  await page.goto(baseUrl+fixedDepositProductPage.createProductPage);
  await page.locator(fixedDepositProductPage.productName).fill(fixedDepositProductData.name);
  await page.locator(fixedDepositProductPage.productShortName).fill(fixedDepositProductData.shortName);
  await page.locator(fixedDepositProductPage.productDescription).fill(fixedDepositProductData.description);
  await page.locator(fixedDepositProductPage.nextButton1).click();
  await page.locator(fixedDepositProductPage.inMultiplesOf).fill(fixedDepositProductData.multipleOf);
  await page.locator(fixedDepositProductPage.nextButton2).click();
  await page.locator(fixedDepositProductPage.depositAmount).fill(fixedDepositProductData.depositAmount);
  await page.locator(fixedDepositProductPage.nextButton3).click();
  await page.locator(fixedDepositProductPage.minDepositTerm).fill(fixedDepositProductData.minDepositTerm);
  await page.locator(fixedDepositProductPage.minDepositTermType).selectOption(fixedDepositProductData.minDepositTermType,{force:true});
  await page.locator(fixedDepositProductPage.nextButton4).click();
  await page.locator(fixedDepositProductPage.fromDate).fill(formatDate(new Date()),{force:true});
  await page.locator(fixedDepositProductPage.addChartButton).click()
  await page.locator(fixedDepositProductPage.fromPeriod).fill(fixedDepositProductData.fromPeriod);
  await page.locator(fixedDepositProductPage.annualInterestRate).fill(fixedDepositProductData.annualInterestRate);
  await page.locator(fixedDepositProductPage.periodType).selectOption(fixedDepositProductData.periodType,{force:true});
  await page.locator(fixedDepositProductPage.nextButton5).click();
  await page.locator(fixedDepositProductPage.nextButton6).click();
  await page.locator(fixedDepositProductPage.nextButton7).click();
  await page.locator(fixedDepositProductPage.save).click();
  
  })

})










 



