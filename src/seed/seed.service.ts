import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/auth/entities/employee.entity';
import { Repository } from 'typeorm';
import { initialData } from './data/seed-data';
import { Person } from '../auth/entities/person.entity';

@Injectable()
export class SeedService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,

        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
    ) { }

    private async deleteTables() {

        const employeeQueryBuilder = this.employeeRepository.createQueryBuilder();
        await employeeQueryBuilder.delete().where({}).execute()
        
        const personQueryBuilder = this.personRepository.createQueryBuilder();
        await personQueryBuilder.delete().where({}).execute()

    }
    relationLoadStrategy
    private async insertEmployees() {
        const seedEmployees = initialData.employees;

        const employees: Employee[] = [];

        seedEmployees.forEach(employee => {
            employees.push(this.employeeRepository.create(employee));
        })

        const dbEmployees = await this.employeeRepository.save(seedEmployees);

        return dbEmployees[0];
    }

    async runSeed() {
        await this.deleteTables();

        await this.insertEmployees();

        return 'SEED EXECUTED'
    }
}