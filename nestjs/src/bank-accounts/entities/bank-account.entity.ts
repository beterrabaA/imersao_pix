import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'bank_account' })
export class BankAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  account_number: string;

  @Column()
  owner_name: string;

  @Column({ default: 0 })
  balance: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
