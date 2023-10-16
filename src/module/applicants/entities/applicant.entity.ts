import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Applicants extends Model<Applicants> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column({ type: DataType.STRING }) name: string;

    @Column({ type: DataType.STRING }) pan_number: string;

    @Column({ type: DataType.STRING }) adhar_number: string;

    @Column({ type: DataType.STRING }) district_of_birth: string;

    @Column({ type: DataType.DATEONLY }) date_of_birth: string;

    @Column({ type: DataType.STRING }) spouse_name: string;

    @Column({ type: DataType.INTEGER }) children: number;

    @Column({ type: DataType.TEXT }) residential_address: string;

    @Column({ type: DataType.INTEGER }) no_of_year_in_resident: number;

    @Column({ type: DataType.STRING }) residential_status: string;

    @Column({ type: DataType.STRING }) mobile: string;

    @Column({ type: DataType.STRING }) email: string;

    @Column({ type: DataType.STRING }) business_name: string;

    @Column({ type: DataType.STRING }) nature_of_business: string;

    @Column({ type: DataType.TEXT }) business_address: string;

    @Column({ type: DataType.STRING })
    business_email_id: string;

    @Column({ type: DataType.DECIMAL(10, 2) }) monthly_income: number;

    @Column({
        type: DataType.STRING,
        get() {
            const value = this.getDataValue('credit_card_status');
            return value ? JSON.parse(value) : null;
        },
        set(value) {
            this.setDataValue('credit_card_status', value ? JSON.stringify(value) : null);
        },
    })
    credit_card_status: string;

    @Column({
        type: DataType.STRING,
        get() {
            const value = this.getDataValue('any_kind_of_loan');
            return value ? JSON.parse(value) : null;
        },
        set(value) {
            this.setDataValue('any_kind_of_loan', value ? JSON.stringify(value) : null);
        },
    })
    any_kind_of_loan: string;

    @Column({ type: DataType.STRING }) bank_name: string;

    @Column({
        type: DataType.ENUM,
        values: ['Secured', 'Unsecured', 'Government'],
    })
    loan_type: string;

    @Column({ type: DataType.DECIMAL(10, 2) }) loan_amount: number;

    @Column({ type: DataType.DECIMAL(10, 2) }) emi_amount: number;

    @Column({ type: DataType.INTEGER }) tenure: number;

    @Column({ type: DataType.TEXT }) property_address: string;

    @Column({ type: DataType.DECIMAL(10, 2) }) satakhat_amount: number;

    @Column({ type: DataType.STRING }) loan_required: string;

    @Column({ type: DataType.FLOAT }) sq_feet: number;

    @Column({ type: DataType.STRING }) ref_1_name: string;

    @Column({ type: DataType.STRING }) ref_1_phone: string;

    @Column({ type: DataType.STRING }) address: string;

    @Column({ type: DataType.STRING }) ref_2_name: string;

    @Column({ type: DataType.STRING }) ref_2_phone: string;

    @Column({ type: DataType.STRING }) asset_base: string;

    @Column({
        type: DataType.ENUM,
        values: ['applicant', 'co_applicant'],
        defaultValue: 'applicant',
    })
    applicant_type: string;

    @Column({ type: DataType.STRING }) father_name: string;

    @Column({ type: DataType.STRING }) mother_name: string;

    @Column({ type: DataType.STRING }) education: string;

    @Column({ type: DataType.STRING }) landline_no: string;

    @Column({ type: DataType.INTEGER }) no_of_year_in_business: number;

    @Column({ type: DataType.INTEGER }) no_of_employees: number;

    @Column({ type: DataType.STRING }) ref_2_address: string;

    @Column({ type: DataType.DECIMAL(10, 2) }) other_income: number;

    @Column({
        type: DataType.STRING, // Store as JSON string
        allowNull: false,
        get() {
            return JSON.parse(this.getDataValue('business_last_3_years_turnover'));
        },
        set(value) {
            this.setDataValue('business_last_3_years_turnover', JSON.stringify(value));
        },
    })
    business_last_3_years_turnover: number[];

    @Column({ type: DataType.INTEGER })
    business_stability: number;

    @Column({ type: DataType.INTEGER })
    quotation: number;

    @Column({ type: DataType.STRING })
    intake: string;

    @Column({ type: DataType.STRING })
    car_number: string;

    @Column({ type: DataType.INTEGER })
    car_year: number;

    @Column({ type: DataType.STRING }) car_make: string;

    @Column({ type: DataType.STRING }) car_model: string;

    @Column({ type: DataType.INTEGER }) car_insurance: number;

    @Column({ type: DataType.BOOLEAN }) is_puc: boolean;

    @Column({ type: DataType.BOOLEAN }) is_commercial: boolean;

    @Column({ type: DataType.DECIMAL(10, 2) }) satakhat: number;

    @Column({ type: DataType.FLOAT }) square_foot: number;

    @Column({ type: DataType.BOOLEAN }) is_subsidy: boolean;

    @Column({
        type: DataType.ENUM,
        values: ['Property', 'FD', 'Gold'],
    })
    secured_type: string;

    @Column({ type: DataType.STRING }) gov_name: string;

    @Column({ type: DataType.STRING }) gov_village: string;

    @Column({ type: DataType.STRING }) gov_taluka: string;

    @Column({ type: DataType.STRING }) gov_district: string;

    @Column({ type: DataType.STRING }) gov_landArea: string;

    @Column({ type: DataType.STRING }) edu_country: string;

    @Column({ type: DataType.STRING }) edu_university: string;

    @Column({ type: DataType.STRING }) edu_course: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: new Date(),
    })
    createdAt: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: new Date(),
    })
    updatedAt: string;
}
