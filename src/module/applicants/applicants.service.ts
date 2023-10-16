import { Inject, Injectable } from '@nestjs/common';
import { APPLICANTS_REPOSITORY } from 'src/constant/constant';
import { Applicants } from './entities/applicant.entity';
import { ApplicationService } from './applications.service';

interface ApplicantModel {
    applicant: Applicants;
    co_applicant: Applicants;
}

interface AllApplicantModel {
    id: number;
    name: string;
    mobile: string;
}

@Injectable()
export class ApplicantsService {
    constructor(
        @Inject(APPLICANTS_REPOSITORY)
        private applicantsRepository: typeof Applicants,
        private applicationService: ApplicationService,
    ) {}

    async create(created_by: number, applicant_data: any, co_applicant_data: any): Promise<ApplicantModel> {
        const applicant = await this.applicantsRepository.create({
            ...applicant_data,
            applicant_type: 'applicant',
        });

        const co_applicant = await this.applicantsRepository.create({
            ...co_applicant_data,
            applicant_type: 'co_applicant',
        });

        const application_data = {
            created_by,
            applicant_id: applicant.dataValues.id,
            co_applicant_id: co_applicant.dataValues.id,
        };

        await this.applicationService.create(application_data);

        applicant.dataValues.any_kind_of_loan = JSON.parse(applicant.dataValues.any_kind_of_loan);

        applicant.dataValues.credit_card_status = JSON.parse(applicant.dataValues.credit_card_status);

        co_applicant.dataValues.any_kind_of_loan = JSON.parse(co_applicant.dataValues.any_kind_of_loan);

        co_applicant.dataValues.credit_card_status = JSON.parse(co_applicant.dataValues.credit_card_status);

        return {
            applicant: applicant.dataValues,
            co_applicant: co_applicant.dataValues,
        };
    }

    async findAll(ids: number[]): Promise<AllApplicantModel[]> {
        const data = await this.applicantsRepository.findAll({
            where: { id: ids },
            attributes: ['id', 'name', 'mobile'],
        });

        const final_list = data.map((value: any) => {
            return value.dataValues;
        });

        return final_list;
    }

    async find_by_id(id: number): Promise<Applicants> {
        const data = await this.applicantsRepository.findOne({ where: { id } });

        data.dataValues.any_kind_of_loan = JSON.parse(data.dataValues.any_kind_of_loan);

        data.dataValues.credit_card_status = JSON.parse(data.dataValues.credit_card_status);

        return data.dataValues;
    }

    update(id: number, updateApplicantDto: any) {
        return `This action updates a #${id} applicant`;
    }

    remove(id: number) {
        return `This action removes a #${id} applicant`;
    }
}
