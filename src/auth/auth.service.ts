import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces';
import { Person } from './entities/person.entity';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
        private readonly jwtService: JwtService,
        private readonly dataSource: DataSource
    ) { }

    async checkAuthStatus(employee: Employee) {

        return {
            ...employee,
            token: this.getJwtToken({ id: employee.id })
        };
    }

    private getJwtToken(payload: JwtPayload) {
        const token = this.jwtService.sign(payload);
        return token;
    }

    private handleDBErrors(error: any): never {


        if (error.code === '23505')
            throw new BadRequestException(error.detail);

        console.log(error)

        throw new InternalServerErrorException('Please check server logs');

    }

    async createEmployee(createWorkerDto: CreateEmployeeDto) {
        try {
            const data = createWorkerDto;

            const newPeron = new Person();
            newPeron.firstName = data.firstName;
            newPeron.lastName = data.lastName;
            newPeron.email = data.email;
            newPeron.address = data.address;
            newPeron.cellphone = data.cellphone;
            newPeron.documentType = data.documentType;
            newPeron.document = data.document;
            newPeron.dob = data.dob;

            const newEmployee = new Employee();
            newEmployee.username = data.username;
            newEmployee.password = bcrypt.hashSync(data.password, 10);
            newEmployee.startDate = data.startDate;
            newEmployee.endDate = data.endDate;
            newEmployee.roles = data.roles;
            newEmployee.person = newPeron;

            await this.dataSource.manager.save(newEmployee);

            delete newEmployee.password;

            return {
                ...newPeron,
                ...newEmployee,
                token: this.getJwtToken({ id: newEmployee.id }),
            }
        } catch (error) {
            this.handleDBErrors(error);
        }
    }

    async getAllEmployees(paginationDto: PaginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;

        const employees = await this.dataSource.getRepository(Employee).find({
            relations: {
                person: true
            },
            take: limit,
            skip: offset
        })
        return employees
    }

    async getAllActiveEmployees(paginationDto: PaginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;

        const employees = await this.dataSource.getRepository(Employee).find({
            relations: {
                person: true
            },
            take: limit,
            skip: offset,
            where: {
                isActive: true
            }
        })
        return employees
    }

    async getAllUnactiveEmployees(paginationDto: PaginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;

        const employees = await this.dataSource.getRepository(Employee).find({
            relations: {
                person: true
            },
            take: limit,
            skip: offset,
            where: {
                isActive: false
            }
        })
        return employees
    }
}