import { Column, Entity } from 'typeorm';

@Entity()
export class Tag {
  @Column()
  content: string;
}
