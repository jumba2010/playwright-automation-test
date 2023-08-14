require('dotenv').config()
const {test, expect} = require('@playwright/test');
const { loanPage } = require('./page-objects/page-objects');
const constants = require('./page-objects/constants');
const xpath = require('xpath-dom');
const {loanData}=require('./page-objects/test-data')
require('dotenv').config()
const { describe,beforeEach } = test;
const {formatDate}=require('./utils/DateTimeUtils');
const createLoan =require('./hooks/loan');

const baseUrl = process.env.BASE_URL

 describe.only(constants.LOAN, () => {
  beforeEach(async ({context,page}) => {
    page = await context.newPage();
    await createLoan(context,page);
  })

  test(constants.LOAN_REPAYMENT, async ({context}) => {
    const page = await context.newPage()
    //By this time We are retrieving the loan that was created on beforeEach method and stored in the context,
    // and We are doing a repayment using
    await page.goto(baseUrl+loanPage.loanPage+context.loanId+loanPage.repaymentPage);
    let transactionAmount=await page.textContent(loanPage.transactionAmount)
    expect(transactionAmount).not.toBeNull()
    expect(transactionAmount).not.toBeUndefined()
    await page.locator(loanPage.note).fill(loanData.note,{delay:200});
    await page.locator(loanPage.save).click();

    //Make sure the loan has been repaid and correct url is loaded
     const url = await page.url()
    expect(url).toBe(baseUrl+loanPage.loanPage+context.loanId+loanPage.repaymentPage);
  
    })


    test(constants.PREPAY_LOAN, async ({context}) => {
      const page = await context.newPage()
      //By this time We are retrieving the loan that was created on beforeEach method and stored in the context,
      // and We are doing a repayment using
      await page.goto(baseUrl+loanPage.loanPage+context.loanId+loanPage.prepayLoan);
      let transactionAmount=await page.textContent(loanPage.transactionAmount)
      expect(transactionAmount).not.toBeNull()
      expect(transactionAmount).not.toBeUndefined()
      await page.locator(loanPage.note).fill(loanData.note,{delay:200});
      await page.locator(loanPage.save).click();

      //Make sure the loan has been repaid and correct url is loaded
       const url = await page.url()
      expect(url).toBe(baseUrl+loanPage.loanPage+context.loanId+loanPage.prepayLoan);
    
      })


      test(constants.LOAN_FORECLOSURE, async ({context}) => {
        const page = await context.newPage()
        //By this time We are retrieving the loan that was created on beforeEach method and stored in the context,
        // and We are doing a repayment using
        await page.goto(baseUrl+loanPage.foreclosure+context.loanId);
        expect(transactionAmount).not.toBeNull()
        expect(transactionAmount).not.toBeUndefined()
        await page.locator(loanPage.note).fill(loanData.note,{delay:200});
        await page.locator(loanPage.save).click();

        //Make sure the loan has been repaid and correct url is loaded
         const url = await page.url()
        expect(url).toBe(baseUrl+loanPage.foreclosure+context.loanId);
      
        })
  

        test(constants.LOAN_WRITE_OFF, async ({context}) => {
          const page = await context.newPage()
          //By this time We are retrieving the loan that was created on beforeEach method and stored in the context,
          // and We are doing a repayment using
          await page.goto(baseUrl+loanPage.loanPage+context.loanId+loanPage.writeOff);
          await page.locator(loanPage.save).click();
  
          //Make sure the loan has been repaid and correct url is loaded
           const url = await page.url()
          expect(url).toBe(baseUrl+loanPage.loanPage+context.loanId+loanPage.writeOff);
        
          })


          test(constants.LOAN_WAIVE_INTERESTS, async ({context}) => {
            const page = await context.newPage()
            //By this time We are retrieving the loan that was created on beforeEach method and stored in the context,
            // and We are doing a repayment using
            await page.goto(baseUrl+loanPage.loanPage+context.loanId+loanPage.waiveinterest);
            await page.locator(loanPage.note).fill(loanData.note,{delay:200});
            await page.locator(loanPage.save).click();
    
            //Make sure the loan has been repaid and correct url is loaded
             const url = await page.url()
            expect(url).toBe(baseUrl+loanPage.loanPage+context.loanId+loanPage.waiveinterest);
          
            })


            test(constants.UNDO_LOAN_DISBURSAL, async ({context}) => {
              const page = await context.newPage()
              //By this time We are retrieving the loan that was created on beforeEach method and stored in the context,
              // and We are doing a repayment using
              await page.goto(baseUrl+loanPage.loanPage+context.loanId+loanPage.undoDisbursal);
              await page.locator(loanPage.note).fill(loanData.note,{delay:200});
              await page.locator(loanPage.save).click();
      
              //Make sure the loan has been repaid and correct url is loaded
               const url = await page.url()
              expect(url).toBe(baseUrl+loanPage.loanPage+context.loanId+loanPage.undoDisbursal);
            
              })



              test(constants.CLOSE_LOAN, async ({context}) => {
                const page = await context.newPage()
                //By this time We are retrieving the loan that was created on beforeEach method and stored in the context,
                // and We are doing a repayment using
  
                await test(constants.LOAN_WRITE_OFF, async ({context}) => {})
                await page.goto(baseUrl+loanPage.loanPage+context.loanId+loanPage.closeLoan);
                await page.locator(loanPage.note).fill(loanData.note,{delay:200});
                await page.locator(loanPage.save).click();
        
                //Make sure the loan has been repaid and correct url is loaded
                 const url = await page.url()
                expect(url).toBe(baseUrl+loanPage.loanPage+context.loanId+loanPage.closeLoan);
              
                })
})










 



