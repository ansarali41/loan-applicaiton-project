import { Inject, Injectable } from '@nestjs/common';
import { APPLICATIONS_REPOSITORY } from 'src/constant/constant';
import { Applications } from './entities/applications.entity';

@Injectable()
export class ApplicationService {
    constructor(
        @Inject(APPLICATIONS_REPOSITORY)
        private applicationRepository: typeof Applications,
    ) {}

    async create(body: any): Promise<any> {
        const data = await this.applicationRepository.create({ ...body });
        return data.dataValues;
    }

    async find_created_by(created_by: number): Promise<number[]> {
        const get_ids = await this.applicationRepository.findAll({
            where: { created_by },
            attributes: ['applicant_id'],
        });

        const applicant_ids = get_ids.map((data: any) => {
            return data.dataValues.applicant_id;
        });

        return applicant_ids;
    }

    findOne(id: number) {
        return `This action returns a #${id} applicant`;
    }

    update(id: number, updateApplicantDto: any) {
        return `This action updates a #${id} applicant`;
    }

    remove(id: number) {
        return `This action removes a #${id} applicant`;
    }
}
