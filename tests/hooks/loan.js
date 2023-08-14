const {expect} = require('@playwright/test');
const { loanPage } = require('../page-objects/page-objects');
const {loanData}=require('../page-objects/test-data')
const constants = require('../page-objects/constants');
const {formatDate}=require('../utils/DateTimeUtils');
const login =require('./login');
require('dotenv').config()
const baseUrl = process.env.BASE_URL

const createLoan = async (context,page) => {
  await login(page)
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
  const urlarray = page.url().split('/')
  let loanId=urlarray[urlarray.length-2];
  context.loanId = loanId;
  await page.locator(loanPage.note).fill(loanData.note,{delay:200});
  await page.locator(loanPage.save).click();
  await page.locator(loanPage.disbursementButton).click({delay:200});
  await page.locator(loanPage.note).fill(loanData.note,{delay:200});
  await page.locator(loanPage.save).click();
}


module.exports = createLoan