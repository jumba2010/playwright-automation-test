const { faker } =require( '@faker-js/faker');

const clientData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthDate: faker.date.birthdate(),
    address: faker.address.streetAddress(),
    zippCode: faker.address.zipCode(),
    city: faker.address.city()
}

const loanData = {
    principalAmount: "1000",
    loamApprovedAmount:"1000",
    loanCurrentBance:"1,353.21",
    disbursedAmount:"1000",
    proposedAmount:"1000",
    note:"Note"
}

const savingsAccountData = {
    transactionAmount: faker.finance.amount(),
    clientName: "Adonay",
}

const loanProductData = {
    name: faker.commerce.product(),
    shortName: faker.commerce.product().substring(0, 4).toUpperCase(),
    multipleOf: "2",
    installmentMultipleOf: "2",
    minPrincipal: "200",
    principal: "10000",
    maxPrincipal: "20000",
    minNumberOfRepayments: "1",
    numberOfRepayments: "2",
    maxNumberOfRepayments: "10",
    minInterestRatePerPeriod: "1",
    interestRatePerPeriod: "7",
    maxInterestRatePerPeriod: "12",
    repaymentEvery: "1",
    DEFAULT_FUND_SOURCE_ID:"Cash In Hand",
    DEFAULT_LOAN_PORTFOLIO:"Cash In Hand",
    DEFAULT_INTEREST_RECEIVED:"Cash In Hand",
    DEFAULT_FEES_RECEIVABLE:"Cash In Hand",
    DEFAULT_RECEIVABLE_PENALTY:"Cash In Hand",
    DEFAULT_TRANSFER_IN_SUSPENSE:"Cash In Hand",
    DEFAULT_INCOME_FOR_INTEREST:"Fees and Charges",
    DEFAULT_LOSSES_WRITE_OFF:"Losses Written Off",
    DEFAULT_OVERPAYMENT_LIABILITY:"Overpayment Liability"
}

const savingsProductData = {
    name: faker.commerce.product(),
    shortName: faker.commerce.product().substring(0, 4).toUpperCase(),
    multipleOf: "2",
    installmentMultipleOf: "2",
    nominalAnualInterestRate: "12.5",
    savingsReferenceAccountId:"Cash In Hand",
    savingsControlAccountId:"Recurring Deposits",
    interestOnSavingsAccountId:"Losses Written Off",
    writeOffAccountId:"Losses Written Off",
    incomeFromFeeAccountId:"Fees and Charges",
    incomeFromPenaltyAccountId:"Fees and Charges",
    incomeFromInterestId:"Fees and Charges",
    transfersInSuspenseAccountId:"Recurring Deposits",
}

const fixedDepositProductData = {
    name: faker.commerce.product(),
    shortName: faker.commerce.product().substring(0, 4).toUpperCase(),
    description: faker.commerce.product(),
    multipleOf: "2",
    installmentMultipleOf: "2",
    depositAmount: "1200",
    minDepositTerm: "200",
    minDepositTermType: "Days",
    fromPeriod: "1",
    annualInterestRate: "12",
    periodType: "Days",
}

const recurringDepositProductData = {
    name: faker.commerce.product(),
    shortName: faker.commerce.product().substring(0, 4).toUpperCase(),
    description: faker.commerce.product(),
    multipleOf: "2",
    installmentMultipleOf: "2",
    depositAmount: "1200",
    minDepositTerm: "200",
    minDepositTermType: "Days",
    fromPeriod: "1",
    annualInterestRate: "12",
    periodType: "Days",
}

const fixedDepositAccountData = {
    productId: "FCMB",
    shortName: faker.commerce.product().substring(0, 4).toUpperCase(),
    description: faker.commerce.product(),
    multipleOf: "2",
    installmentMultipleOf: "2",
    depositAmount: "1200",
    minDepositTerm: "200",
    minDepositTermType: "Days",
    fromPeriod: "1",
    annualInterestRate: "12",
    periodType: "Days",
}


module.exports = {
    clientData, loanData, savingsAccountData, loanProductData, savingsProductData,
    fixedDepositProductData,recurringDepositProductData,fixedDepositAccountData
}