import { Entity, Column, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('persons')
export class Person {

    @PrimaryGeneratedColumn('uuid', { name: 'person_id' })
    id: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    firstName: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    lastName: string;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    address: string;

    @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
    cellphone: string;

    @Column({ type: 'varchar', length: 70, nullable: false })
    documentType: string;

    @Column({ type: 'varchar', length: 25, nullable: false, unique: true })
    document: string;

    @Column({type: 'date', nullable: false})
    dob: Date

    // @OneToOne(() => Employee,
    //     employee => employee.person,)
    // employee : Employee

    @CreateDateColumn({
        name: 'crated_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: string;

    // @OneToOne(type => Cliente, cliente => cliente.persona)
    // cliente: Cliente;

    // @OneToOne(type => Trabajador, trabajador => trabajador.persona)
    // trabajador: Trabajador;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();
    }
}