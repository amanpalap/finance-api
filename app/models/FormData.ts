import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class FormData extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column({ isPrimary: true })
    declare userId: number

    // Step 1: Personal Information
    @column()
    declare step1Age: string

    @column()
    declare step1Occupation: string

    @column()
    declare step1MaritalStatus: string

    // Step 2: Income Details
    @column()
    declare step2Salary: number

    @column()
    declare step2Bonus: number

    @column()
    declare step2BusinessIncome: number

    @column()
    declare step2RentalIncome: number

    @column()
    declare step2OtherIncome: number

    // Step 3: Expenses
    @column()
    declare step3HomeLoanCash: number

    @column()
    declare step3HomeLoanCPF: number

    @column()
    declare step3CarLoan: number

    @column()
    declare step3CreditLineRepayments: number

    @column()
    declare step3OtherLoans: number

    @column()
    declare step3RentalExpense: number

    @column()
    declare step3InsurancePremiums: number

    @column()
    declare step3SavingsInvestments: number

    @column()
    declare step3_1Other: number

    @column()
    declare step3GroceriesSundry: number

    @column()
    declare step3ChildrenMaintenance: number

    @column()
    declare step3ParentsAllowance: number

    @column()
    declare step3MaidService: number

    @column()
    declare step3FamilyOther: number

    @column()
    declare step3PropertyTax: number

    @column()
    declare step3UtilitiesBills: number

    @column()
    declare step3Vacation: number

    @column()
    declare step3Hobbies: number

    @column()
    declare step3OtherLifestyle: number

    @column()
    declare step3PersonalAllowance: number

    @column()
    declare step3TransportExpenses: number

    @column()
    declare step3IncomeTax: number

    @column()
    declare step3Others: number

    // Step 4: Liabilities
    @column()
    declare step4CreditCardOutstanding: number

    @column()
    declare step4CreditLines: number

    @column()
    declare step4ShortTermOthers: number

    @column()
    declare step4CarHirePurchase: number

    @column()
    declare step4ResidentialMortgage: number

    @column()
    declare step4InvestmentMortgage: number

    @column()
    declare step4CommercialMortgage: number

    @column()
    declare step4LongTermOthers: number

    // Step 5: Assets
    @column()
    declare step5BankDeposits: number

    @column()
    declare step5FixedDeposit: number

    @column()
    declare step5CashAssetsOthers: number

    @column()
    declare step5Business: number

    @column()
    declare step5Shares: number

    @column()
    declare step5RentedResidential: number

    @column()
    declare step5RentedCommercial: number

    @column()
    declare step5UnitTrustFunds: number

    @column()
    declare step5Bonds: number

    @column()
    declare step5CpfInvestments: number

    @column()
    declare step5CpfOA: number

    @column()
    declare step5CpfSA: number

    @column()
    declare step5InvestedAssetsOthers: number

    @column()
    declare step5OwnerResidential: number

    @column()
    declare step5Cars: number

    @column()
    declare step5CountryClubs: number

    @column()
    declare step5AssetsOthers: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}
