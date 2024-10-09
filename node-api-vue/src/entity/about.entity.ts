import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class About {
  @PrimaryGeneratedColumn()
  id: number;
// cvcvcv
  @Column()
  text: string;

  @Column()
  photo: string;

  @Column()
  color: string; 
}