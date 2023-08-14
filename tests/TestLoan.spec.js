require('dotenv').config()
const {test, expect} = require('@playwright/test');
const { loanPage } = require('./page-objects/page-objects');
const constants = require('./page-objects/constants');
const {loanData}=require('./page-objects/test-data')
require('dotenv').config()
const { describe,beforeEach } = test;
const {formatDate}=require('./utils/DateTimeUtils');
const login =require('./hooks/login');
const baseUrl = process.env.BASE_URL

describe.only(constants.LOAN, () => {
  beforeEach(async ({context,page}) => {
    page = await context.newPage();
    await login(page)


  })

  test(constants.CREATE_LOAN, async ({context}) => {
  const page = await context.newPage()
  await page.goto(baseUrl+loanPage.clientsPage);
  await page.goto(baseUrl+loanPage.viewClientPage);
  await page.goto(baseUrl+loanPage.newClientLOanAccount);
  await page.locator(loanPage.productId).selectOption(constants.DEFAULT_PRODUCT_NAME,{force:true});
  await page.locator(loanPage.disbursementDate).fill(formatDate(new Date()),{force:true});
  await page.locator(loanPage.nextButtonDetails).click();
  await page.locator(loanPage.principal).fill(loanData.principalAmount,{force:true});

  //Some assertions on principal amount
  let principal=await page.textContent(loanPage.principal)
  expect(principal).not.toBeNull()
  expect(principal).not.toBeUndefined()

  let disbursementDate=await page.textContent(loanPage.disbursementDate)
  expect(disbursementDate).not.toBeNull()
  expect(disbursementDate).not.toBeUndefined()
  await page.locator(loanPage.nextTermButton).click();
  await page.locator(loanPage.nextChargeButton).click();
  await page.locator(loanPage.save).click({delay:200});
  await page.locator(loanPage.approveButton).click({delay:200});
  await page.locator(loanPage.save).click();
  await page.locator(loanPage.disbursementButton).click({delay:200});
  await page.locator(loanPage.note).fill(loanData.note,{delay:200});
  await page.locator(loanPage.save).click();

   //Make sure the proposed amount, the approved amount and the balance are accurate
  expect(loanPage.loanCurrentBance).toBe(loanData.loanCurrentBance); 
  expect(loanPage.proposedAmount).toBe(loanData.proposedAmount); 
  expect(loanPage.loamApprovedAmount).toBe(loanData.loamApprovedAmount);
  expect(loanPage.disbursedAmount).toBe(loanData.disbursedAmount);
  })

})










 



