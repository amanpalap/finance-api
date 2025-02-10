import { BaseSchema } from '@adonisjs/lucid/schema'


export default class FormDataSchema extends BaseSchema {
    protected tableName = 'form_data'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('user_id').unsigned().references('id').inTable('users').notNullable().onDelete('CASCADE')

            // Step_ 1: Personal Information
            table.string('step_1_age')
            table.string('step_1_occupation', 255)
            table.string('step_1_marital_status', 255)

            // Step_ 2: Income Details
            table.decimal('step_2_salary', 12, 2).defaultTo(0)
            table.decimal('step_2_bonus', 12, 2).defaultTo(0)
            table.decimal('step_2_business_income', 12, 2).defaultTo(0)
            table.decimal('step_2_rental_income', 12, 2).defaultTo(0)
            table.decimal('step_2_other_income', 12, 2).defaultTo(0)

            // Step_ 3: Expenses
            table.decimal('step_3_home_loan_cash', 12, 2).defaultTo(0)
            table.decimal('step_3_home_loan_cpf', 12, 2).defaultTo(0)
            table.decimal('step_3_car_loan', 12, 2).defaultTo(0)
            table.decimal('step_3_credit_line_repayments', 12, 2).defaultTo(0)
            table.decimal('step_3_other_loans', 12, 2).defaultTo(0)
            table.decimal('step_3_rental_expense', 12, 2).defaultTo(0)
            table.decimal('step_3_insurance_premiums', 12, 2).defaultTo(0)
            table.decimal('step_3_savings_investments', 12, 2).defaultTo(0)
            table.decimal('step_3_1_other', 12, 2).defaultTo(0)
            table.decimal('step_3_groceries_sundry', 12, 2).defaultTo(0)
            table.decimal('step_3_children_maintenance', 12, 2).defaultTo(0)
            table.decimal('step_3_parents_allowance', 12, 2).defaultTo(0)
            table.decimal('step_3_maid_service', 12, 2).defaultTo(0)
            table.decimal('step_3_family_other', 12, 2).defaultTo(0)
            table.decimal('step_3_property_tax', 12, 2).defaultTo(0)
            table.decimal('step_3_utilities_bills', 12, 2).defaultTo(0)
            table.decimal('step_3_vacation', 12, 2).defaultTo(0)
            table.decimal('step_3_hobbies', 12, 2).defaultTo(0)
            table.decimal('step_3_other_lifestyle', 12, 2).defaultTo(0)
            table.decimal('step_3_personal_allowance', 12, 2).defaultTo(0)
            table.decimal('step_3_transport_expenses', 12, 2).defaultTo(0)
            table.decimal('step_3_income_tax', 12, 2).defaultTo(0)
            table.decimal('step_3_others', 12, 2).defaultTo(0)

            // Step_ 4: Liabilities
            table.decimal('step_4_credit_card_outstanding', 12, 2).defaultTo(0)
            table.decimal('step_4_credit_lines', 12, 2).defaultTo(0)
            table.decimal('step_4_short_term_others', 12, 2).defaultTo(0)
            table.decimal('step_4_car_hire_purchase', 12, 2).defaultTo(0)
            table.decimal('step_4_residential_mortgage', 12, 2).defaultTo(0)
            table.decimal('step_4_investment_mortgage', 12, 2).defaultTo(0)
            table.decimal('step_4_commercial_mortgage', 12, 2).defaultTo(0)
            table.decimal('step_4_long_term_others', 12, 2).defaultTo(0)

            // Step_ 5: Assets
            table.decimal('step_5_bank_deposits', 12, 2).defaultTo(0)
            table.decimal('step_5_fixed_deposit', 12, 2).defaultTo(0)
            table.decimal('step_5_cash_assets_others', 12, 2).defaultTo(0)
            table.decimal('step_5_business', 12, 2).defaultTo(0)
            table.decimal('step_5_shares', 12, 2).defaultTo(0)
            table.decimal('step_5_rented_residential', 12, 2).defaultTo(0)
            table.decimal('step_5_rented_commercial', 12, 2).defaultTo(0)
            table.decimal('step_5_unit_trust_funds', 12, 2).defaultTo(0)
            table.decimal('step_5_bonds', 12, 2).defaultTo(0)
            table.decimal('step_5_cpf_investments', 12, 2).defaultTo(0)
            table.decimal('step_5_cpf_oa', 12, 2).defaultTo(0)
            table.decimal('step_5_cpf_sa', 12, 2).defaultTo(0)
            table.decimal('step_5_invested_assets_others', 12, 2).defaultTo(0)
            table.decimal('step_5_owner_residential', 12, 2).defaultTo(0)
            table.decimal('step_5_cars', 12, 2).defaultTo(0)
            table.decimal('step_5_country_clubs', 12, 2).defaultTo(0)
            table.decimal('step_5_assets_others', 12, 2).defaultTo(0)

            table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
            table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
