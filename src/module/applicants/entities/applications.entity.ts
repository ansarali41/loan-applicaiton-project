import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/module/user/entities/user.entity';
import { Applicants } from './applicant.entity';

@Table
export class Applications extends Model<Applications> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Applicants)
  @Column({ type: DataType.INTEGER })
  applicant_id: number;

  @ForeignKey(() => Applicants)
  @Column({ type: DataType.INTEGER })
  co_applicant_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  created_by: number;

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
