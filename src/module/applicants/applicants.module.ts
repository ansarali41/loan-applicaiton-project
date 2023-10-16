import { Module } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { ApplicantsController } from './applicants.controller';
import {
  applicantsProviders,
  applicationsProviders,
} from './applicants.provider';
import { ApplicationService } from './applications.service';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { userProviders } from '../user/user.provider';

@Module({
  // imports: [UserModule],
  controllers: [ApplicantsController],
  providers: [
    ApplicantsService,
    ...applicantsProviders,
    ApplicationService,
    ...applicationsProviders,
    UserService,
    ...userProviders,
  ],
})
export class ApplicantsModule {}
