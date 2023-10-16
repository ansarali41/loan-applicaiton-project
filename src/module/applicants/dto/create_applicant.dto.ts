import { IsArray, IsEmail, IsISO8601, IsNotEmpty, IsNumber, IsString } from 'class-validator';

interface AnyLoanDetail {
    bank_name: string;
    loan_type: string;
    loan_amount: number;
    emi_amount: number;
    tenure: number;
}

export class CreateApplicantDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    pan_number: string;

    @IsNotEmpty()
    @IsString()
    adhar_number: string;

    @IsNotEmpty()
    @IsString()
    district_of_birth: string;

    @IsNotEmpty()
    @IsISO8601()
    date_of_birth: string;

    @IsString()
    spouse_name: string;

    @IsNotEmpty()
    @IsNumber()
    children: number;

    @IsNotEmpty()
    @IsString()
    residential_address: string;

    @IsNotEmpty()
    @IsNumber()
    no_of_year_in_resident: number;

    @IsNotEmpty()
    @IsString()
    residential_status: string;

    @IsNotEmpty()
    @IsString()
    mobile: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    business_name: string;

    @IsString()
    nature_of_business: string;

    @IsString()
    business_address: string;

    @IsEmail()
    business_email_id: string;

    @IsNotEmpty()
    @IsNumber()
    monthly_income: number;

    @IsString()
    credit_card_status: string;

    any_kind_of_loan: AnyLoanDetail;

    @IsNotEmpty()
    @IsString()
    bank_name: string;

    @IsNotEmpty()
    @IsNumber()
    loan_amount: number;

    @IsNotEmpty()
    @IsString()
    loan_type: string;

    @IsNotEmpty()
    @IsNumber()
    emi_amount: number;

    @IsNotEmpty()
    @IsNumber()
    tenure: number;

    @IsString()
    property_address: string;

    @IsNumber()
    satakhat_amount: number;

    @IsString()
    loan_required: string;

    @IsNotEmpty()
    @IsNumber()
    sq_feet: number;

    @IsNotEmpty()
    @IsString()
    ref_1_name: string;

    @IsNotEmpty()
    @IsString()
    ref_1_phone: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    ref_2_name: string;

    @IsNotEmpty()
    @IsString()
    ref_2_phone: string;

    @IsNotEmpty()
    @IsString()
    asset_base: string;

    @IsNotEmpty()
    @IsArray()
    @IsNumber({}, { each: true })
    business_last_3_years_turnover: number[];

    @IsNotEmpty()
    @IsNumber()
    business_stability: number;

    @IsNotEmpty()
    @IsNumber()
    quotation: number;

    @IsNotEmpty()
    @IsString()
    car_number: string;

    @IsNotEmpty()
    @IsString()
    intake: string;
}
