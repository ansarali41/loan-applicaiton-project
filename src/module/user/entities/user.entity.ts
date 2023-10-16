import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  mobile: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  company_name: string;

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
