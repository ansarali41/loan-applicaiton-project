import {
  APPLICANTS_REPOSITORY,
  APPLICATIONS_REPOSITORY,
} from 'src/constant/constant';
import { Applicants } from './entities/applicant.entity';
import { Applications } from './entities/applications.entity';

export const applicantsProviders = [
  {
    provide: APPLICANTS_REPOSITORY,
    useValue: Applicants,
  },
];

export const applicationsProviders = [
  {
    provide: APPLICATIONS_REPOSITORY,
    useValue: Applications,
  },
];
