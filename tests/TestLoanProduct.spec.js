require('dotenv').config()
const { test, expect } = require('@playwright/test');
const { loanProductPage } = require('./page-objects/page-objects');
const constants = require('./page-objects/constants');
const { loanProductData } = require('./page-objects/test-data');
require('dotenv').config()
const { describe, beforeEach } = test;
const { formatDate } = require('./utils/DateTimeUtils');
const login = require('./hooks/login');
const baseUrl = process.env.BASE_URL

describe.only(constants.LOAN_PRODUCT_TEST, () => {
  beforeEach(async ({ context, page }) => {
    page = await context.newPage();
    await login(page)
  })

  test(constants.CREATE_LOAN_PRODUCT, async ({ context }) => {
    const page = await context.newPage()
    await setUpCommonOperations(page)
    await page.locator(loanProductPage.nextButton6).click();
    await page.locator(loanProductPage.save).click();
  })



  test(constants.SET_UP_ACRUAL_UPFRONT_ON_THE_LOAN_PRODUCT, async ({ context }) => {
    const page = await context.newPage()
    await setUpCommonOperations(page)

    //Accrual Upfront setup
    await page.locator(loanProductPage.accrualUpfrontOption).check()
    //First We need to force and show the element, then We select an option
    const fundSourceAccountId = await page.$(loanProductPage.fundSourceAccountId);
    await page.evaluate(element => element.style.display = 'block', fundSourceAccountId);
    await page.locator(loanProductPage.fundSourceAccountId).selectOption(loanProductData.DEFAULT_FUND_SOURCE_ID);

    const loanPortfolio = await page.$(loanProductPage.loanPortfolio);
    await page.evaluate(element => element.style.display = 'block', loanPortfolio);
    await page.locator(loanProductPage.loanPortfolio).selectOption(loanProductData.DEFAULT_LOAN_PORTFOLIO, { force: true });

    const interestReceived = await page.$(loanProductPage.interestReceived);
    await page.evaluate(element => element.style.display = 'block', interestReceived);
    await page.locator(loanProductPage.interestReceived).selectOption(loanProductData.DEFAULT_LOAN_PORTFOLIO, { force: true });

    const feesReceivable = await page.$(loanProductPage.feesReceivable);
    await page.evaluate(element => element.style.display = 'block', feesReceivable);
    await page.locator(loanProductPage.feesReceivable).selectOption(loanProductData.DEFAULT_FEES_RECEIVABLE, { force: true });

    const receivablePenalty = await page.$(loanProductPage.receivablePenalty);
    await page.evaluate(element => element.style.display = 'block', receivablePenalty);
    await page.locator(loanProductPage.receivablePenalty).selectOption(loanProductData.DEFAULT_RECEIVABLE_PENALTY, { force: true });

    const transferInSuspense = await page.$(loanProductPage.transferInSuspense);
    await page.evaluate(element => element.style.display = 'block', transferInSuspense);
    await page.locator(loanProductPage.transferInSuspense).selectOption(loanProductData.DEFAULT_TRANSFER_IN_SUSPENSE, { force: true });

    const incomeForInterest = await page.$(loanProductPage.incomeForInterest);
    await page.evaluate(element => element.style.display = 'block', incomeForInterest);
    await page.locator(loanProductPage.incomeForInterest).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });

    const incomeFromFees = await page.$(loanProductPage.incomeFromFees);
    await page.evaluate(element => element.style.display = 'block', incomeFromFees);
    await page.locator(loanProductPage.incomeFromFees).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });

    const incomeFromPenalty = await page.$(loanProductPage.incomeFromPenalty);
    await page.evaluate(element => element.style.display = 'block', incomeFromPenalty);
    await page.locator(loanProductPage.incomeFromPenalty).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });


    const incomeFromRecovery = await page.$(loanProductPage.incomeFromRecovery);
    await page.evaluate(element => element.style.display = 'block', incomeFromRecovery);
    await page.locator(loanProductPage.incomeFromRecovery).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });

    const lossesWriteOff = await page.$(loanProductPage.lossesWriteOff);
    await page.evaluate(element => element.style.display = 'block', lossesWriteOff);
    await page.locator(loanProductPage.lossesWriteOff).selectOption(loanProductData.DEFAULT_LOSSES_WRITE_OFF, { force: true });

    const overPaymentLiability = await page.$(loanProductPage.overPaymentLiability);
    await page.evaluate(element => element.style.display = 'block', overPaymentLiability);
    await page.locator(loanProductPage.overPaymentLiability).selectOption(loanProductData.DEFAULT_OVERPAYMENT_LIABILITY, { force: true });
    await page.locator(loanProductPage.nextButton6).click();
    await page.locator(loanProductPage.save).click();

    //Make sure the loan has been repaid and correct url is loaded
    const url = await page.url()
    expect(url).toBe(baseUrl + loanProductPage.createProductPage);
  })



  test(constants.SET_UP_ACRUAL_PERIODIC_ON_THE_LOAN_PRODUCT, async ({ context }) => {
    const page = await context.newPage()
    await setUpCommonOperations(page)
    //Accrual Periodic setup
    await page.locator(loanProductPage.accrualPeriodicOption).check()

    //First We need to force and show the element, then We select an option
    const fundSourceAccountId = await page.$(loanProductPage.fundSourceAccountId);
    await page.evaluate(element => element.style.display = 'block', fundSourceAccountId);
    await page.locator(loanProductPage.fundSourceAccountId).selectOption(loanProductData.DEFAULT_FUND_SOURCE_ID);

    const loanPortfolio = await page.$(loanProductPage.loanPortfolio);
    await page.evaluate(element => element.style.display = 'block', loanPortfolio);
    await page.locator(loanProductPage.loanPortfolio).selectOption(loanProductData.DEFAULT_LOAN_PORTFOLIO, { force: true });

    const interestReceived = await page.$(loanProductPage.interestReceived);
    await page.evaluate(element => element.style.display = 'block', interestReceived);
    await page.locator(loanProductPage.interestReceived).selectOption(loanProductData.DEFAULT_LOAN_PORTFOLIO, { force: true });

    const feesReceivable = await page.$(loanProductPage.feesReceivable);
    await page.evaluate(element => element.style.display = 'block', feesReceivable);
    await page.locator(loanProductPage.feesReceivable).selectOption(loanProductData.DEFAULT_FEES_RECEIVABLE, { force: true });

    const receivablePenalty = await page.$(loanProductPage.receivablePenalty);
    await page.evaluate(element => element.style.display = 'block', receivablePenalty);
    await page.locator(loanProductPage.receivablePenalty).selectOption(loanProductData.DEFAULT_RECEIVABLE_PENALTY, { force: true });

    const transferInSuspense = await page.$(loanProductPage.transferInSuspense);
    await page.evaluate(element => element.style.display = 'block', transferInSuspense);
    await page.locator(loanProductPage.transferInSuspense).selectOption(loanProductData.DEFAULT_TRANSFER_IN_SUSPENSE, { force: true });

    const incomeForInterest = await page.$(loanProductPage.incomeForInterest);
    await page.evaluate(element => element.style.display = 'block', incomeForInterest);
    await page.locator(loanProductPage.incomeForInterest).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });

    const incomeFromFees = await page.$(loanProductPage.incomeFromFees);
    await page.evaluate(element => element.style.display = 'block', incomeFromFees);
    await page.locator(loanProductPage.incomeFromFees).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });

    const incomeFromPenalty = await page.$(loanProductPage.incomeFromPenalty);
    await page.evaluate(element => element.style.display = 'block', incomeFromPenalty);
    await page.locator(loanProductPage.incomeFromPenalty).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });


    const incomeFromRecovery = await page.$(loanProductPage.incomeFromRecovery);
    await page.evaluate(element => element.style.display = 'block', incomeFromRecovery);
    await page.locator(loanProductPage.incomeFromRecovery).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });

    const lossesWriteOff = await page.$(loanProductPage.lossesWriteOff);
    await page.evaluate(element => element.style.display = 'block', lossesWriteOff);
    await page.locator(loanProductPage.lossesWriteOff).selectOption(loanProductData.DEFAULT_LOSSES_WRITE_OFF, { force: true });

    const overPaymentLiability = await page.$(loanProductPage.overPaymentLiability);
    await page.evaluate(element => element.style.display = 'block', overPaymentLiability);
    await page.locator(loanProductPage.overPaymentLiability).selectOption(loanProductData.DEFAULT_OVERPAYMENT_LIABILITY, { force: true });

    await page.locator(loanProductPage.nextButton6).click();
    await page.locator(loanProductPage.save).click();

    //Make sure the loan has been repaid and correct url is loaded
    const url = await page.url()
    expect(url).toBe(baseUrl + loanProductPage.createProductPage);
  })



  test(constants.SET_UP_CASH_ON_THE_LOAN_PRODUCT, async ({ context }) => {
    const page = await context.newPage()
    await setUpCommonOperations(page)

    //Set up cash accounting configration
    await page.locator(loanProductPage.cashOption).check()

    //First We need to force and show the element, then We select an option
    const fundSourceAccountId = await page.$(loanProductPage.fundSourceAccountId);
    await page.evaluate(element => element.style.display = 'block', fundSourceAccountId);
    await page.locator(loanProductPage.fundSourceAccountId).selectOption(loanProductData.DEFAULT_FUND_SOURCE_ID);

    const loanPortfolio = await page.$(loanProductPage.loanPortfolio);
    await page.evaluate(element => element.style.display = 'block', loanPortfolio);
    await page.locator(loanProductPage.loanPortfolio).selectOption(loanProductData.DEFAULT_LOAN_PORTFOLIO, { force: true });

    const transferInSuspense = await page.$(loanProductPage.transferInSuspense);
    await page.evaluate(element => element.style.display = 'block', transferInSuspense);
    await page.locator(loanProductPage.transferInSuspense).selectOption(loanProductData.DEFAULT_TRANSFER_IN_SUSPENSE, { force: true });

    const incomeForInterest = await page.$(loanProductPage.incomeForInterest);
    await page.evaluate(element => element.style.display = 'block', incomeForInterest);
    await page.locator(loanProductPage.incomeForInterest).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });

    const incomeFromFees = await page.$(loanProductPage.incomeFromFees);
    await page.evaluate(element => element.style.display = 'block', incomeFromFees);
    await page.locator(loanProductPage.incomeFromFees).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });

    const incomeFromPenalty = await page.$(loanProductPage.incomeFromPenalty);
    await page.evaluate(element => element.style.display = 'block', incomeFromPenalty);
    await page.locator(loanProductPage.incomeFromPenalty).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });

    const incomeFromRecovery = await page.$(loanProductPage.incomeFromRecovery);
    await page.evaluate(element => element.style.display = 'block', incomeFromRecovery);
    await page.locator(loanProductPage.incomeFromRecovery).selectOption(loanProductData.DEFAULT_INCOME_FOR_INTEREST, { force: true });

    const lossesWriteOff = await page.$(loanProductPage.lossesWriteOff);
    await page.evaluate(element => element.style.display = 'block', lossesWriteOff);
    await page.locator(loanProductPage.lossesWriteOff).selectOption(loanProductData.DEFAULT_LOSSES_WRITE_OFF, { force: true });

    const overPaymentLiability = await page.$(loanProductPage.overPaymentLiability);
    await page.evaluate(element => element.style.display = 'block', overPaymentLiability);
    await page.locator(loanProductPage.overPaymentLiability).selectOption(loanProductData.DEFAULT_OVERPAYMENT_LIABILITY, { force: true });

    await page.locator(loanProductPage.nextButton6).click();
    await page.locator(loanProductPage.save).click();

    //Make sure the loan has been repaid and correct url is loaded
    const url = await page.url()
    expect(url).toBe(baseUrl + loanProductPage.createProductPage);
  })


  test(constants.EDIT_LOAN_PRODUCT, async ({ context }) => {
    const page = await context.newPage()
    await page.goto(baseUrl + loanProductPage.editProductPage);
    await page.locator(loanProductPage.minPrincipal).fill(loanProductData.minPrincipal);
    await page.locator(loanProductPage.principal).fill(loanProductData.principal);
    await page.locator(loanProductPage.maxPrincipal).fill(loanProductData.maxPrincipal);
    await page.locator(loanProductPage.minNumberOfRepayments).fill(loanProductData.minNumberOfRepayments);
    await page.locator(loanProductPage.numberOfRepayments).fill(loanProductData.numberOfRepayments);
    await page.locator(loanProductPage.maxNumberOfRepayments).fill(loanProductData.maxNumberOfRepayments);
    await page.locator(loanProductPage.minInterestRatePerPeriod).fill(loanProductData.minInterestRatePerPeriod);
    await page.locator(loanProductPage.interestRatePerPeriod).fill(loanProductData.interestRatePerPeriod);
    await page.locator(loanProductPage.maxInterestRatePerPeriod).fill(loanProductData.maxInterestRatePerPeriod);
    await page.locator(loanProductPage.repaymentEvery).fill(loanProductData.repaymentEvery);
    await page.locator(loanProductPage.save).click();
  })


})

const setUpCommonOperations = async (page) => {
  await page.goto(baseUrl + loanProductPage.createProductPage);
  await page.locator(loanProductPage.productName).fill(loanProductData.name);
  await page.locator(loanProductPage.productShortName).fill(loanProductData.shortName);
  await page.locator(loanProductPage.nextButton1).click();
  await page.locator(loanProductPage.inMultiplesOf).fill(loanProductData.multipleOf);
  await page.locator(loanProductPage.installmentMultipleOf).fill(loanProductData.installmentMultipleOf);
  await page.locator(loanProductPage.nextButton2).click();
  await page.locator(loanProductPage.minPrincipal).fill(loanProductData.minPrincipal);
  await page.locator(loanProductPage.principal).fill(loanProductData.principal);
  await page.locator(loanProductPage.maxPrincipal).fill(loanProductData.maxPrincipal);
  await page.locator(loanProductPage.minNumberOfRepayments).fill(loanProductData.minNumberOfRepayments);
  await page.locator(loanProductPage.numberOfRepayments).fill(loanProductData.numberOfRepayments);
  await page.locator(loanProductPage.maxNumberOfRepayments).fill(loanProductData.maxNumberOfRepayments);
  await page.locator(loanProductPage.minInterestRatePerPeriod).fill(loanProductData.minInterestRatePerPeriod);
  await page.locator(loanProductPage.interestRatePerPeriod).fill(loanProductData.interestRatePerPeriod);
  await page.locator(loanProductPage.maxInterestRatePerPeriod).fill(loanProductData.maxInterestRatePerPeriod);
  await page.locator(loanProductPage.repaymentEvery).fill(loanProductData.repaymentEvery);
  await page.locator(loanProductPage.nextButton3).click();
  await page.locator(loanProductPage.nextButton4).click();
  await page.locator(loanProductPage.nextButton5).click();
}













