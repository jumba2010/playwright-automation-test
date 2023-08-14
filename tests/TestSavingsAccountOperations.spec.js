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

  test(constants.CREATE_DEPOSIT_INTO_SAVINGS_ACCOUNT, async ({context}) => {
    const page = await context.newPage()
    await page.goto(baseUrl+loanPage.clientsPage);
    await page.goto(baseUrl+loanPage.viewClientPage);
    await page.goto(baseUrl+savingsAccountPage.viewSavingsAccountPage);
    await page.locator(savingsAccountPage.depositButton).click();
    await page.locator(savingsAccountPage.transactionDate).fill(formatDate(new Date()),{force:true});
    await page.locator(savingsAccountPage.transactionAmount).fill(savingsAccountData.transactionAmount,{force:true});
    await page.locator(savingsAccountPage.paymentTypeId).selectOption(constants.DEFAULT_SAVINGS_ACCOUNT_DEPOSIT,{force:true});
    await page.locator(loanPage.save).click();
    })


    test(constants.WIDTHDRAW_TO_SAVINGS_ACCOUNT, async ({context}) => {
      const page = await context.newPage()
      await page.goto(baseUrl+loanPage.clientsPage);
      await page.goto(baseUrl+loanPage.viewClientPage);
      await page.goto(baseUrl+savingsAccountPage.viewSavingsAccountPage);
      await page.locator(savingsAccountPage.withdrawButton).click();
      await page.locator(savingsAccountPage.transactionDate).fill(formatDate(new Date()),{force:true});
      await page.locator(savingsAccountPage.transactionAmount).fill(savingsAccountData.transactionAmount,{force:true});
      await page.locator(savingsAccountPage.paymentTypeId).selectOption(constants.DEFAULT_SAVINGS_ACCOUNT_DEPOSIT,{force:true});
      await page.locator(loanPage.save).click();
      })
  

    test(constants.TRANSFER_TO_SAVINGS_ACCOUNT, async ({context}) => {
      const page = await context.newPage()
      await page.goto(baseUrl+loanPage.clientsPage);
      await page.goto(baseUrl+loanPage.viewClientPage);
      await page.goto(baseUrl+savingsAccountPage.viewSavingsAccountPage);
      await page.goto(baseUrl+savingsAccountPage.accountTransferPage);
      await page.locator(savingsAccountPage.transferToOfficeId).selectOption(constants.DEFAULT_TO_OFFICE_ID,{force:true});
      await page.locator(savingsAccountPage.transferToClientId).type(savingsAccountData.clientName,{force:true,delay:200});
      await page.locator(savingsAccountPage.transferAccount).click({force:true});
      await page.locator(savingsAccountPage.transferToAccountTypeId).selectOption(constants.DEFAULT_TO_ACCOUNT_TYPE_ID,{force:true});
      await page.locator(savingsAccountPage.trabsferToAccountId).selectOption(savingsAccountData.clientToAccountId,{force:true});
      await page.locator(savingsAccountPage.transferAmount).fill(savingsAccountData.transferAmount,{force:true});
      await page.locator(savingsAccountPage.transferDate).type(formatDate(new Date()),{force:true,delay:200});
      await page.click(savingsAccountPage.transferDate)
      await page.locator(savingsAccountPage.transferDescription).fill(savingsAccountData.transferDescription,{force:true});
      await page.locator(loanPage.save).click();
      })


      test(constants.ADD_CHARGES_TO_SAVINGS_ACCOUNT, async ({context}) => {
        const page = await context.newPage()
        await page.goto(baseUrl+loanPage.clientsPage);
        await page.goto(baseUrl+loanPage.viewClientPage);
        await page.goto(baseUrl+savingsAccountPage.viewSavingsAccountPage);
        await page.goto(baseUrl+savingsAccountPage.addChargesPage);
        await page.locator(savingsAccountPage.chargeId).selectOption(constants.DEFAULT_CHARGE_ID,{force:true});
        await page.locator(loanPage.save).click();
        })
})










 



