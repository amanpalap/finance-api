import type { HttpContext } from '@adonisjs/core/http'
import FormData from '#models/FormData'

export default class FormDataController {

    /**
     * Get all form data entries
     */
    async index({ response }: HttpContext) {
        const formDataList = await FormData.all()
        return response.json({
            status: true,
            data: formDataList
        })
    }

    /**
     * Create or update form data entry
     */
    async store({ request, response }: HttpContext) {
        const data = request.all();
        console.log("Received data:", data);

        // Ensure the keys match the database column names
        const formattedData = {
            userId: data.userId,
            step1Age: data.step1_age,
            step1Occupation: data.step1_occupation,
            step1MaritalStatus: data.step1_maritalStatus,
            step2Salary: data.step2_salary,
            step2Bonus: data.step2_bonus,
            step2BusinessIncome: data.step2_businessIncome,
            step2RentalIncome: data.step2_rentalIncome,
            step2OtherIncome: data.step2_otherIncome,
            step3HomeLoanCash: data.step3_homeLoanCash,
            step3HomeLoanCPF: data.step3_homeLoanCPF,
            step3CarLoan: data.step3_carLoan,
            step3CreditLineRepayments: data.step3_creditLineRepayments,
            step3OtherLoans: data.step3_otherLoans,
            step3RentalExpense: data.step3_rentalExpense,
            step3InsurancePremiums: data.step3_insurancePremiums,
            step3SavingsInvestments: data.step3_savingsInvestments,
            step3_1Other: data.step3_1Other,
            step3GroceriesSundry: data.step3_groceriesSundry,
            step3ChildrenMaintenance: data.step3_childrenMaintenance,
            step3ParentsAllowance: data.step3_parentsAllowance,
            step3MaidService: data.step3_maidService,
            step3FamilyOther: data.step3_familyOther,
            step3PropertyTax: data.step3_propertyTax,
            step3UtilitiesBills: data.step3_utilitiesBills,
            step3Vacation: data.step3_vacation,
            step3Hobbies: data.step3_hobbies,
            step3OtherLifestyle: data.step3_otherLifestyle,
            step3PersonalAllowance: data.step3_personalAllowance,
            step3TransportExpenses: data.step3_transportExpenses,
            step3IncomeTax: data.step3_incomeTax,
            step3Others: data.step3_others,
            step4CreditCardOutstanding: data.step4_creditCardOutstanding,
            step4CreditLines: data.step4_creditLines,
            step4ShortTermOthers: data.step4_shortTermOthers,
            step4CarHirePurchase: data.step4_carHirePurchase,
            step4ResidentialMortgage: data.step4_residentialMortgage,
            step4InvestmentMortgage: data.step4_investmentMortgage,
            step4CommercialMortgage: data.step4_commercialMortgage,
            step4LongTermOthers: data.step4_longTermOthers,
            step5BankDeposits: data.step5_bankDeposits,
            step5FixedDeposit: data.step5_fixedDeposit,
            step5CashAssetsOthers: data.step5_cashAssetsOthers,
            step5Business: data.step5_business,
            step5Shares: data.step5_shares,
            step5RentedResidential: data.step5_rentedResidential,
            step5RentedCommercial: data.step5_rentedCommercial,
            step5UnitTrustFunds: data.step5_unitTrustFunds,
            step5Bonds: data.step5_bonds,
            step5CpfInvestments: data.step5_cpfInvestments,
            step5CpfOA: data.step5_cpfOA,
            step5CpfSA: data.step5_cpfSA,
            step5InvestedAssetsOthers: data.step5_investedAssetsOthers,
            step5OwnerResidential: data.step5_ownerResidential,
            step5Cars: data.step5_cars,
            step5CountryClubs: data.step5_countryClubs,
            step5AssetsOthers: data.step5_assetsOthers,
        };

        // Check if data exists for the given userId
        let formData = await FormData.findBy('userId', data.userId);

        if (formData) {
            // If record exists, update it
            formData.merge(formattedData);
            await formData.save();
            return response.json({
                status: true,
                message: 'Form data updated successfully!',
                data: formData
            });
        } else {
            // Otherwise, create a new record
            formData = await FormData.create(formattedData);
            return response.json({
                status: true,
                message: 'Form data created successfully!',
                data: formData
            });
        }
    }


}
