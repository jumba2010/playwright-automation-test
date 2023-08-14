const loginPage = {
    username: "id=uid",
    password: "id=pwd",
    submitButton: "id=login-button",
    homePage: "#/home",
    home: "#home",
    errorMessage: "//div[@class='alert alert-danger ng-binding']"
}

const clientPage = {
    clientsPage: "#/clients",
    editClient: '#/editclient/37',
    createClientPage: "#/createclient",
    firstName: "input[name=firstname]",
    lastName: "input[name=lastname]",
    birthDate: "input[name=dateofbirth]",
    gender: "id=genderId",
    legalFormId: "id=legalFormId",
    addressButton: "//i[@title='Add Address']",
    addressTypeSelect: "[name='addressType']",
    submitButton: "id=save",
    viewClientPage: "viewclient",
    activateClientButton: "//a[normalize-space()='Activate']",
    activate: "activate",
    activationDate: "//div[@class='form-group']//input[@id='activationDate']",
    save: "//button[@id='save']",
    editAddressButton: "//a[normalize-space()='Address']",
    addressDetailsButton: "//button[normalize-space()='Edit']",
    addressLine1: "//input[@id='addressline1']",
    city: "//input[@id='city']",
    postalCode: "//input[@id='postal_code']",
    editAddressSubmitButtton: "//button[@id='edit']",
    familyMembersButton: "//a[normalize-space()='Family Members']",
    addFamilyMembersButton: "//button[normalize-space()='Add Family Member']",
    famillyMemberFirstName: "//input[@id='firstName']",
    familyMemberLastName: "//input[@id='lastName']",
    editFamilyMembersDetails: "//button[@id='edit']"

}


const loanPage = {
    clientsPage: "#/clients",
    viewClientPage: "#/viewclient/36",
    newClientLOanAccount: "#/newclientloanaccount/36",
    productId: "id=productId",
    loamApprovedAmount:"1000",
    loanCurrentBance:"1,353.21",
    disbursedAmount:"1000",
    proposedAmount:"1000",
    disbursementDate: "id=expectedDisbursementDate",
    nextButtonDetails: "//form[@name='Details']//button[@type='submit']",
    principal: "//input[@id='principal']",
    nextTermButton: "//form[@name='Terms']//button[@type='submit']",
    nextChargeButton: "//form[@name='Charges']//button[@type='submit']",
    approveButton: "//a[@has-permission='APPROVE_LOAN']",
    approvedOnDate: "//div[@class='form-group']//input[@id='approvedOnDate']",
    disbursementButton: "//a[@has-permission='DISBURSE_LOAN']",
    actualDisbursementDate: "//div[@class='form-group']//input[@id='actualDisbursementDate']",
    save: "//button[@id='save']",
    loanRepaymentPage:"#/loanaccount/105/repayment",
    repaymentDate:"input[id='transactionDate'][min='2000-01-01'][max='restrictDate']",
    transactionAmount:"//*[@id='transactionAmount']",
    transactionDate:"id=transactionDate",
    viewLoanAccountPage:"#/viewloanaccount/105",
    note:"//*[@id='note']",
    loanPage:"#/loanaccount/",
    repaymentPage :"/repayment",
    viewRepaidLoanPage: "#/viewloanaccount/",
    prepayLoan:"/prepayloan",
    foreclosure:"#/loanforeclosure/",
    writeOff:"/writeoff",
    waiveinterest:"/waiveinterest",
    undoDisbursal:"/undodisbursal",
    closeLoan:"/close",

}



const savingsAccountPage = {
    newSavingsAccountButton: "#/new_client_saving_application/4",
    approveButton: "//a[@has-permission='APPROVE_SAVINGSACCOUNT']",
    activateButton: "//a[@has-permission='ACTIVATE_SAVINGSACCOUNT']",
    activatedOnDate: "//div[@class='form-group']//input[@id='activatedOnDate']",
    viewSavingsAccountPage: "#/viewsavingaccount/17",
    accountTransferPage: "#/accounttransfers/fromsavings/17",
    depositButton: "//a[@has-permission='DEPOSIT_SAVINGSACCOUNT']",
    transactionDate: "//div[@class='form-group']//input[@id='transactionDate']",
    transactionAmount: "//div[@class='form-group']//input[@id='transactionAmount']",
    paymentTypeId: "id=paymentTypeId",
    withdrawButton: "//a[@has-permission='WITHDRAW_SAVINGSACCOUNT']",
    transferButton: "//a[@has-permission='CREATE_ACCOUNTTRANSFER']",
    transferToOfficeId: "id=toOfficeId",
    transferToClientId: "id=toClientId",
    transferToAccountTypeId: "id=toAccountType",
    trabsferToAccountId: "id=toAccountId",
    transferAccount: "//a[@title='4 Adonay Porras']",
    transferAmount: "id=transferAmount",
    transferDate: "id=transferDate",
    transferDescription: "id=transferDescription",
    addChargesPage: "#/savingaccounts/17/charges",
    chargeId: "id=chargeId"
}

const loanProductPage = {
    createProductPage: "#/createloanproduct",
    inMultiplesOf: "id=inMultiplesOf",
    productName: "id=name",
    productShortName: "id=shortName",
    nextButton1: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[1]/form/fieldset/button[2]",
    nextButton2: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[2]/form/fieldset/button[2]",
    nextButton3: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[3]/form/fieldset/button[2]",
    nextButton4: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[4]/form/fieldset/button[2]",
    nextButton5: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[5]/form/fieldset/button[2]",
    nextButton6: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[6]/form/fieldset/button[2]",
    installmentMultipleOf: "id=installmentAmountInMultiplesOf",
    minPrincipal: "id=minPrincipal",
    principal: "id=principal",
    maxPrincipal: "id=maxPrincipal",
    minNumberOfRepayments: "id=minNumberOfRepayments",
    numberOfRepayments: "id=numberOfRepayments",
    maxNumberOfRepayments: "id=maxNumberOfRepayments",
    minInterestRatePerPeriod: "id=minInterestRatePerPeriod",
    interestRatePerPeriod: "id=interestRatePerPeriod",
    maxInterestRatePerPeriod: "id=maxInterestRatePerPeriod",
    repaymentEvery: "id=repaymentEvery",
    accountMovesOutOfNPAOnlyOnArrearsCompletion: "id=accountMovesOutOfNPAOnlyOnArrearsCompletion",
    save: "//button[@id='save']",
    editProductPage: "#/editloanproduct/2",
    accrualUpfrontOption:"input[value='4']",
    fundSourceAccountId:"//*[@id='fundSourceAccountId']",
    loanPortfolio:"//*[@id='loanPortfolioAccountId']",
    interestReceived:"//*[@id='receivableInterestAccountId']",
    feesReceivable:"//*[@id='receivableFeeAccountId']",
    receivablePenalty:"//*[@id='receivablePenaltyAccountId']",
    transferInSuspense:"//*[@id='transfersInSuspenseAccountId']",
    incomeForInterest:"//*[@id='incomeFromPenaltyAccountId']",
    incomeFromFees:"//*[@id='incomeFromFeeAccountId']",
    incomeFromPenalty:"//*[@id='incomeFromPenaltyAccountId']",
    incomeFromRecovery:"//*[@id='incomeFromRecoveryAccountId']",
    lossesWriteOff:"//*[@id='writeOffAccountId']",
    overPaymentLiability:"//*[@id='overpaymentLiabilityAccountId']",
    accrualPeriodicOption:"input[value='3']",
    cashOption:"input[value='2']",

}

const savingsProductPage = {
    createProductPage: "#/createsavingproduct",
    productName: "//*[@id='name']",
    productShortName: "//*[@id='shortName']",
    inMultiplesOf: "id=inMultiplesOf",
    nominalAnualInterestRate: "//*[@id='nominalAnnualInterestRate']",
    nextButton1: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[1]/form/fieldset/button[2]",
    nextButton2: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[2]/form/fieldset/button[2]",
    nextButton3: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[3]/form/fieldset/button[2]",
    nextButton4: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[4]/form/fieldset/button[2]",
    nextButton5: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[5]/form/fieldset/button[2]",
    nextButton6: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[6]/form/fieldset/button[2]",
    save: "//button[@id='save']",
    editProductPage: "#/editsavingproduct/10",
    savingsReferenceAccountId:"//*[@id='savingsReferenceAccountId']",
    overdraftPortfolioControlId:"//*[@id='overdraftPortfolioControlId']",
    savingsControlAccountId:"//*[@id='savingsControlAccountId']",
    transfersInSuspenseAccountId:"//*[@id='transfersInSuspenseAccountId']",
    interestOnSavingsAccountId:"//*[@id='interestOnSavingsAccountId']",
    writeOffAccountId:"//*[@id='writeOffAccountId']",
    incomeFromFeeAccountId:"//*[@id='incomeFromFeeAccountId']",
    incomeFromPenaltyAccountId:"//*[@id='incomeFromPenaltyAccountId']",
    incomeFromInterestId:"//*[@id='incomeFromInterestId']",
    cashOption:"input[value='2']",

}


const fixedDepositProductPage = {
    createProductPage: "#/createfixeddepositproduct",
    productName: "//*[@id='name']",
    productShortName: "//*[@id='shortName']",
    productDescription: "//*[@id='description']",
    inMultiplesOf: "id=inMultiplesOf",
    depositAmount: "//*[@id='depositAmount']",
    minDepositTerm: "//*[@id='minimumDepositTerm']",
    fromDate: "//*[@id='fromDate']",
    minDepositTermType: "//*[@id='minDepositTermTypeId']",
    periodType: "//*[@id='periodType']",
    fromPeriod: "//*[@id='fromPeriod']",
    annualInterestRate: "//*[@id='annualInterestRate']",
    nextButton1: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[1]/form/fieldset/button[2]",
    nextButton2: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[2]/form/fieldset/button[2]",
    nextButton3: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[3]/form/fieldset/button[2]",
    nextButton4: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[4]/form/fieldset/button[2]",
    nextButton5: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[5]/form/fieldset/button[2]",
    nextButton6: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[6]/form/fieldset/button[2]",
    nextButton7: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[7]/form/fieldset/button[2]",
    addChartButton: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[5]/form/fieldset/div[3]/table/tbody/tr/td[7]/div/a",
    periodTypeOption: "//*[@id='periodType_chosen']/div/ul/li[1]",
    save: "//button[@id='save']"
   
}

const fixedDepositAccountPage={
    createFixedDepositAccountPage:"#/newclientfixeddepositaccount/36",
    productId:"//*[@id='productId']",
}



const recurringDepositProductPage = {
    createProductPage: "#/createrecurringdepositproduct",
    productName: "//*[@id='name']",
    productShortName: "//*[@id='shortName']",
    productDescription: "//*[@id='description']",
    inMultiplesOf: "id=inMultiplesOf",
    depositAmount: "//*[@id='depositAmount']",
    minDepositTerm: "//*[@id='minimumDepositTerm']",
    fromDate: "//*[@id='fromDate']",
    minDepositTermType: "//*[@id='minDepositTermTypeId']",
    periodType: "//*[@id='periodType']",
    fromPeriod: "//*[@id='fromPeriod']",
    annualInterestRate: "//*[@id='annualInterestRate']",
    nextButton1: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[1]/form/fieldset/button[2]",
    nextButton2: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[2]/form/fieldset/button[2]",
    nextButton3: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[3]/form/fieldset/button[2]",
    nextButton4: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[4]/form/fieldset/button[2]",
    nextButton5: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[5]/form/fieldset/button[2]",
    nextButton6: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[6]/form/fieldset/button[2]",
    nextButton7: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[7]/form/fieldset/button[2]",
    addChartButton: "//*[@id='mifos-reskin-body-view']/div/div/div/div[2]/div/div[5]/form/fieldset/div[3]/table/tbody/tr/td[7]/div/a",
    periodTypeOption: "//*[@id='periodType_chosen']/div/ul/li[1]",
    save: "//button[@id='save']",
}

module.exports = {
    loginPage, clientPage, loanPage, savingsAccountPage, loanProductPage, savingsProductPage,
    fixedDepositProductPage,recurringDepositProductPage,fixedDepositAccountPage
}
