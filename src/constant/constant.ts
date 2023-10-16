import * as dotenv from 'dotenv';

dotenv.config();

export const DB_DIALECT = process.env.DB_DIALECT;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const JWT_SIGN = process.env.JWT_SIGN;

export const USER_REPOSITORY = 'USER_REPOSITORY';
export const APPLICANTS_REPOSITORY = 'APPLICANTS_REPOSITORY';
export const APPLICATIONS_REPOSITORY = 'APPLICATIONS_REPOSITORY';
