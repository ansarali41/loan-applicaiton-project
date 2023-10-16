import { Sequelize } from 'sequelize-typescript';
import { DB_DIALECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from 'src/constant/constant';
import { Applicants } from 'src/module/applicants/entities/applicant.entity';
import { Applications } from 'src/module/applicants/entities/applications.entity';
import { User } from 'src/module/user/entities/user.entity';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    //@ts-ignore
    dialect: DB_DIALECT,
    host: DB_HOST,
    logging: false,
});

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async (): Promise<Sequelize> => {
            sequelize.addModels([User, Applicants, Applications]);
            // await sequelize.sync({ alter: true });
            return sequelize;
        },
    },
];
