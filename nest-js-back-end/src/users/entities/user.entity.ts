/* eslint-disable indent */
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  name!: string;

  @Column()
  password!: string;

  @Column()
  userRoll!: string;
}