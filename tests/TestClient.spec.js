require('dotenv').config()
const {test, expect} = require('@playwright/test');
const { clientPage } = require('./page-objects/page-objects');
const {clientData}=require('./page-objects/test-data')
const constants = require('./page-objects/constants');
const {formatDate}=require('./utils/DateTimeUtils');
const { describe,beforeEach } = test;
const login =require('./hooks/login');
const baseUrl = process.env.BASE_URL

describe.only(constants.CREATE_CLIENT_SCENARIO, () => {
  beforeEach(async ({context,page}) => {
    page = await context.newPage();
    await login(page)
  })

  test(constants.CREATE_CLIENT_SUCCESS, async ({context}) => {
    const page = await context.newPage()
    await page.goto(baseUrl+clientPage.clientsPage);
    await page.goto(baseUrl+clientPage.createClientPage);
    await page.locator(clientPage.firstName).fill(clientData.firstName);
    await page.locator(clientPage.lastName).fill(clientData.lastName);
    await page.locator(clientPage.birthDate).fill(formatDate(clientData.birthDate));
    await page.locator(clientPage.gender).selectOption(constants.MALE,{force:true});
    await page.locator(clientPage.legalFormId).selectOption(constants.PERSON,{force:true});
    await page.locator(clientPage.addressButton).click();
    await page.locator(clientPage.addressTypeSelect).selectOption(constants.DEFAULT,{force:true});

    //Make sure all mandatory fields have been filled
    let name=await page.textContent(clientPage.firstName)
    expect(name).not.toBeNull()
    expect(name).not.toBeUndefined()

    let lastName=await page.textContent(clientPage.lastName)
    expect(lastName).not.toBeNull()
    expect(lastName).not.toBeUndefined()

    let birthDate=await page.textContent(clientPage.birthDate)
    expect(birthDate).not.toBeNull()
    expect(birthDate).not.toBeUndefined()

    let gender=await page.textContent(clientPage.gender)
    expect(gender).not.toBeNull()
    expect(gender).not.toBeUndefined()

    let legalFormId=await page.textContent(clientPage.legalFormId)
    expect(legalFormId).not.toBeNull()
    expect(legalFormId).not.toBeUndefined()

  
    await page.click(clientPage.submitButton);

    //Activate client
    await page.click(clientPage.activateClientButton);
    const url =await  page.url()
    expect( url.split('/')[6]).toBe(clientPage.activate)

    await page.locator(clientPage.activationDate).fill(formatDate(new Date()));

    await page.locator(clientPage.save).click();

  })

  test(constants.EDIT_CLIENT, async ({context}) => {
    const page = await context.newPage()
    await page.goto(baseUrl+clientPage.clientsPage);
    await page.goto(baseUrl+clientPage.editClient);
    await page.locator(clientPage.firstName).fill(clientData.firstName);
    await page.locator(clientPage.lastName).fill(clientData.lastName);
    await page.click(clientPage.submitButton);

    //Editing address details
    await page.click(clientPage.editAddressButton);
    await page.click(clientPage.addressDetailsButton);
    await page.locator(clientPage.addressLine1).fill(clientData.address);
    await page.locator(clientPage.city).fill(clientData.city);
    await page.locator(clientPage.postalCode).fill(clientData.zippCode);
    await page.click(clientPage.editAddressSubmitButtton);
  })

})










 



