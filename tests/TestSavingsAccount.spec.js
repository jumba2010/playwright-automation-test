require('dotenv').config()
const {test, expect} = require('@playwright/test');
const { savingsAccountPage,loanPage } = require('./page-objects/page-objects');
const constants = require('./page-objects/constants');
const {savingsAccountData}=require('./page-objects/test-data')
require('dotenv').config()
const { describe,beforeEach } = test;
const {formatDate}=require('./utils/DateTimeUtils');
const login =require('./hooks/login');
const baseUrl = process.env.BASE_URL

describe.only(constants.SAVINGS_ACCOUNT, () => {
  beforeEach(async ({context,page}) => {
    page = await context.newPage();
    await login(page)
  })

  test(constants.CREATE_SAVINGS_ACCOUNT, async ({context}) => {
  const page = await context.newPage()
  await page.goto(baseUrl+loanPage.clientsPage);
  await page.goto(baseUrl+loanPage.viewClientPage);
  await page.goto(baseUrl+savingsAccountPage.newSavingsAccountButton);
  await page.locator(loanPage.productId).selectOption(constants.DEFAULT_SAVINGS_PRODUCT_NAME,{force:true});
  await page.locator(loanPage.nextButtonDetails).click();
  await page.locator(loanPage.nextTermButton).click();
  await page.locator(loanPage.nextChargeButton).click();
  await page.locator(loanPage.save).click();
  await page.locator(savingsAccountPage.approveButton).click();
  await page.locator(loanPage.approvedOnDate).fill(formatDate(new Date()),{force:true});
  await page.locator(loanPage.save).click();
  await page.locator(savingsAccountPage.activateButton).click();
  await page.locator(savingsAccountPage.activatedOnDate).fill(formatDate(new Date()),{force:true});
  await page.locator(loanPage.save).click();
  })


})










 



