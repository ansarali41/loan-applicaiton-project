import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res, Req } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { failed, success } from 'src/helper/response';
import { UserService } from '../user/user.service';
import { ApplicationService } from './applications.service';
import { CreateApplicantDto } from './dto/create_applicant.dto';

interface ApplicantModel {
    applicant: CreateApplicantDto;
    co_applicant: CreateApplicantDto;
}

interface FinalModel {}

@Controller('/api/applicants')
export class ApplicantsController {
    constructor(private readonly applicantsService: ApplicantsService, private readonly applicationService: ApplicationService, private readonly userService: UserService) {}

    @Post('/apply')
    async create(@Req() req: any, @Body() body: ApplicantModel, @Res() res: any) {
        try {
            const user = await this.userService.find_by_id(req.data);

            const data = await this.applicantsService.create(user.id, body.applicant, body.co_applicant);
            // const data = '200';
            return res.status(HttpStatus.CREATED).json(success(data, 'Apply successfully ...', 201));
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.BAD_REQUEST).json(failed(500, 'Internal Server Error', error));
        }
    }

    @Get('/')
    async getAll(@Req() req: any, @Res() res: any) {
        try {
            const get_applicant_ids = await this.applicationService.find_created_by(req.data);

            const get_applicant_data = await this.applicantsService.findAll(get_applicant_ids);

            return res.status(HttpStatus.OK).json(success(get_applicant_data, 'List of all Applicants ...'));
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.BAD_REQUEST).json(failed(500, 'Internal Server Error', error));
        }
    }

    @Get('/:id')
    async get_by_id(@Req() req: any, @Param('id') id: number, @Res() res: any) {
        try {
            const data = await this.applicantsService.find_by_id(id);

            return res.status(HttpStatus.OK).json(success(data, 'Detail of Applicants ...'));
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.BAD_REQUEST).json(failed(500, 'Internal Server Error', error));
        }
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateApplicantDto: any) {
        return this.applicantsService.update(+id, updateApplicantDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.applicantsService.remove(+id);
    }
}
