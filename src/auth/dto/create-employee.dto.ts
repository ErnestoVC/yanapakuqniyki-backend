import { Type } from "class-transformer";
import { IsString, IsEmail,  ArrayNotEmpty, IsDate, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";
import { IsAfterDate } from "../decorators";

export class CreateEmployeeDto {

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    cellphone: string;

    @IsString()
    @IsNotEmpty()
    documentType: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @MaxLength(18)
    document: string;

    @IsDate()
    @Type(() => Date)
    dob: Date;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsDate()
    @Type(() => Date)
    startDate: Date;

    @IsDate()
    @Type(() => Date)
    @IsAfterDate('startDate')
    endDate: Date;

    @ArrayNotEmpty()
    roles: string[];
}