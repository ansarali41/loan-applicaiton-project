import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { JWT_SIGN, USER_REPOSITORY } from "src/constant/constant";
import * as bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { Op } from "sequelize";

interface UserModel {
  // id: number;
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  company_name: string;
  JWToken: string;
}

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: typeof User
  ) {}

  async registration(user_data: CreateUserDto): Promise<UserModel> {
    const { first_name, last_name, mobile, email, password, company_name } =
      user_data;
    const bcrypt_password = await bcrypt.hash(password, 10);
    const user = await this.userRepository.create({
      first_name,
      last_name,
      mobile,
      email,
      password: bcrypt_password,
      company_name,
    });
    // user.JWToken = sign(user.id, process.env.JWT_SIGN, {
    //   expiresIn: '86400',
    // });
    const data = user.dataValues;
    const JWToken = sign(user.id, JWT_SIGN);
    return { ...data, JWToken };
  }

  async find_existing_user(mobile: string, email: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { [Op.or]: [{ mobile }, { email }] },
    });
    if (user) return true;
    return false;
  }

  async login(email: string, password: string): Promise<UserModel | boolean> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) return false;

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return false;

    const data = user.dataValues;
    const JWToken = sign(user.id, JWT_SIGN);
    delete data.password;
    return { ...data, JWToken };
  }

  async find_by_id(id: number): Promise<User> {
    const data = await this.userRepository.findOne({ where: { id } });
    return data.dataValues;
  }

  findAll() {
    return `This action returns all user`;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
