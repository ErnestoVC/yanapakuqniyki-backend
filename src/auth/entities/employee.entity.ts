import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./person.entity";

@Entity('employees')
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 70, nullable: false, unique: true })
    username: string;

    @Column('text', {
        select: false
    })
    password: string;

    @OneToOne(() => Person,
        { cascade: true})
    @JoinColumn()
    person: Person

    @Column({ type: 'date', nullable: false, name: 'startContractDate' })
    startDate: Date

    @Column({ type: 'date', nullable: false, name: 'endContractDate' })
    endDate: Date

    @Column('bool', {
        default: true
    })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['waiter']
    })
    roles: string[];

    @CreateDateColumn({
        name: 'crated_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: string;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.username = this.username.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();
    }
}