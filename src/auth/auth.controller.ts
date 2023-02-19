import { Body, Controller, Get, Headers, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth, RawHeaders } from './decorators';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { GetUser } from './decorators/get-user.decorator';
import { Employee } from './entities/employee.entity';
import { AuthGuard } from '@nestjs/passport';
import { IncomingHttpHeaders } from 'http';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('createEmployee')
    createEmployee(@Body() employeeemployeeDto: CreateEmployeeDto) {
        return this.authService.createEmployee(employeeemployeeDto);
    }

    @Get('getAllEmployees')
    getAllEmployees(@Query() paginationDto: PaginationDto) {
        return this.authService.getAllEmployees(paginationDto);
    }

    @Get('getAllActiveEmployees')
    getAllActiveEmployees(@Query() paginationDto: PaginationDto) {
        return this.authService.getAllActiveEmployees(paginationDto);
    }

    @Get('getAllUnactiveEmployees')
    getAllUnactiveEmployees(@Query() paginationDto: PaginationDto) {
        return this.authService.getAllUnactiveEmployees(paginationDto);
    }

    @Get('check-status')
    @Auth()
    checkAuthStatus(
        @GetUser() employee: Employee
    ) {
        return this.authService.checkAuthStatus(employee);
    }

    @Get('private')
    @UseGuards(AuthGuard())
    testingPrivateRoute(
        @Req() request: Express.Request,
        @GetUser() employee: Employee,
        @GetUser('email') userEmail: string,

        @RawHeaders() rawHeaders: string[],
        @Headers() headers: IncomingHttpHeaders,
    ) {


        return {
            ok: true,
            message: 'Hola Mundo Private',
            employee,
            userEmail,
            rawHeaders,
            headers
        }
    }
}
