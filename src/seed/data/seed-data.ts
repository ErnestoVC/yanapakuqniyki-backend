import * as bcrypt from 'bcrypt';

interface SeedPerson {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    cellphone: string;
    documentType: string;
    document: string;
    dob: Date
}

interface SeedEmployee {
    username: string;
    password: string;
    startDate: Date
    endDate: Date
    roles: string[];
    person: SeedPerson;
}

interface SeedData {
    employees: SeedEmployee[];
}

export const initialData: SeedData = {
    employees: [
        {
            username: 'sU45H6d',
            password: bcrypt.hashSync('sU45H6d', 10),
            startDate: new Date("2019-05-01"),
            endDate: new Date("2025-12-31"),
            roles: ['admin', 'waiter'],
            person: {
                firstName: 'Gabriela',
                lastName: 'Rodriguez',
                email: 'gabriela.rodriguez@example.com',
                address: '123 Main St',
                cellphone: '+1 (555) 123-4567',
                documentType: 'DNI',
                document: '12345678',
                dob: new Date("1995-05-01"),
            }
        },
        {
            username: 'jRt7fK5',
            password: bcrypt.hashSync('jRt7fK5', 10),
            startDate: new Date("2020-02-15"),
            endDate: new Date("2023-12-31"),
            roles: ['cashier'],
            person: {
                firstName: 'Miguel',
                lastName: 'Gonzalez',
                email: 'miguel.gonzalez@example.com',
                address: '456 Elm St',
                cellphone: '+1 (555) 234-5678',
                documentType: 'PASAPORTE',
                document: 'AB123456',
                dob: new Date("1988-02-15"),
            }
        },
        {
            username: 'pR67gH5',
            password: bcrypt.hashSync('pR67gH5', 10),
            startDate: new Date("2021-03-05"),
            endDate: new Date("2022-12-31"),
            roles: ['waiter', 'cooker'],
            person: {
                firstName: 'Carolina',
                lastName: 'Sanchez',
                email: 'carolina.sanchez@example.com',
                address: '789 Oak St',
                cellphone: '+1 (555) 345-6789',
                documentType: 'CARNET ANDINO',
                document: '01234567',
                dob: new Date("1993-03-05"),
            }
        },
        {
            username: 'mKt9H7p',
            password: bcrypt.hashSync('mKt9H7p', 10),
            startDate: new Date("2021-04-01"),
            endDate: new Date("2024-12-31"),
            roles: ['cooker', 'grocer'],
            person: {
                firstName: 'Jose',
                lastName: 'Garcia',
                email: 'jose.garcia@example.com',
                address: '321 Pine St',
                cellphone: '+1 (555) 456-7890',
                documentType: 'DNI',
                document: '23456789',
                dob: new Date("1990-04-01"),
            }
        },
        {
            username: 'johndoe',
            password: bcrypt.hashSync('johndoe', 10),
            startDate: new Date("2019-05-10"),
            endDate: new Date("2024-12-31"),
            roles: ['admin', 'waiter'],
            person: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@example.com',
                address: '123 Main St',
                cellphone: '555-555-5555',
                documentType: 'DNI',
                document: '12349678',
                dob: new Date("1990-01-01"),
            }
        },
        {
            username: 'janedoe',
            password: bcrypt.hashSync('janedoe', 10),
            startDate: new Date("2020-01-01"),
            endDate: new Date("2026-12-31"),
            roles: ['admin', 'cooker'],
            person: {
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'janedoe@example.com',
                address: '456 Elm St',
                cellphone: '555-555-5556',
                documentType: 'PASAPORTE',
                document: 'AB123856',
                dob: new Date("1995-03-15"),
            }
        },
        {
            username: 'smithjohn',
            password: bcrypt.hashSync('smithjohn', 10),
            startDate: new Date("2018-11-20"),
            endDate: new Date("2025-12-31"),
            roles: ['cooker'],
            person: {
                firstName: 'John',
                lastName: 'Smith',
                email: 'smithjohn@example.com',
                address: '789 Oak St',
                cellphone: '555-555-5557',
                documentType: 'CARNET ANDINO',
                document: '45678901',
                dob: new Date("1985-06-10"),
            }
        },
        {
            username: 'peterparker',
            password: bcrypt.hashSync('peterparker', 10),
            startDate: new Date("2021-02-15"),
            endDate: new Date("2023-12-31"),
            roles: ['waiter'],
            person: {
                firstName: 'Peter',
                lastName: 'Parker',
                email: 'peterparker@example.com',
                address: '1111 Wall St',
                cellphone: '555-555-5558',
                documentType: 'DNI',
                document: '87654321',
                dob: new Date("1997-12-01"),
            }
        },
        {
            username: 'maryjane',
            password: bcrypt.hashSync('maryjane', 10),
            startDate: new Date("2017-08-05"),
            endDate: new Date("2028-12-31"),
            roles: ['admin', 'cashier'],
            person: {
                firstName: 'Mary',
                lastName: 'Jane',
                email: 'maryjane@example.com',
                address: '2222 Main St',
                cellphone: '555-555-5559',
                documentType: 'PASAPORTE',
                document: 'CD987654',
                dob: new Date("1988-09-22"),
            }
        },
        {
            username: 'xS6nfiwzCp',
            password: bcrypt.hashSync('xS6nfiwzCp', 10),
            startDate: new Date("2021-05-01"),
            endDate: new Date("2023-12-31"),
            roles: ['admin', 'waiter'],
            person: {
                firstName: 'Cristian',
                lastName: 'Diaz',
                email: 'cristian_diaz@gmail.com',
                address: 'Jr. Los Andes 123',
                cellphone: '987654321',
                documentType: 'DNI',
                document: '11111111',
                dob: new Date("1992-06-05"),
            }
        },
        {
            username: 'eRtKlpdZ69',
            password: bcrypt.hashSync('eRtKlpdZ69', 10),
            startDate: new Date("2021-01-01"),
            endDate: new Date("2024-12-31"),
            roles: ['waiter', 'cashier'],
            person: {
                firstName: 'Ana',
                lastName: 'Chavez',
                email: 'ana_chavez@yahoo.com',
                address: 'Av. La Marina 456',
                cellphone: '987654322',
                documentType: 'PASAPORTE',
                document: 'AA123456',
                dob: new Date("1994-03-12"),
            }
        },
        {
            username: 'XsDpTfNcE7',
            password: bcrypt.hashSync('XsDpTfNcE7', 10),
            startDate: new Date("2020-02-15"),
            endDate: new Date("2022-12-31"),
            roles: ['waiter', 'grocer'],
            person: {
                firstName: 'Carlos',
                lastName: 'Garcia',
                email: 'carlos_garcia@gmail.com',
                address: 'Av. Universitaria 789',
                cellphone: '987654323',
                documentType: 'CARNET ANDINO',
                document: '87674321',
                dob: new Date("1995-11-30"),
            }
        },
        {
            username: 'aS4fGhJkL0',
            password: bcrypt.hashSync('aS4fGhJkL0', 10),
            startDate: new Date("2020-10-01"),
            endDate: new Date("2023-12-31"),
            roles: ['cooker', 'grocer'],
            person: {
                firstName: 'Juan',
                lastName: 'Perez',
                email: 'juan_perez@hotmail.com',
                address: 'Jr. Huaylas 456',
                cellphone: '987654324',
                documentType: 'DNI',
                document: '22222222',
                dob: new Date("1990-09-20"),
            }
        }
    ]
}