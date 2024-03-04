import { Employees, Prisma } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class EmployeesService {
    constructor(
        private prisma: PrismaService
    ) {
        
    }
    async getAllEmployees(): Promise<Employees[]> {
        return this.prisma.employees.findMany({
            orderBy: {
                name: 'asc'
            }
        });
    }

    async createEmployee(employeeData: Prisma.EmployeesCreateInput): Promise<Employees> {
        try {
            const newEmployee = await this.prisma.employees.create({
                data: employeeData
            });

            return newEmployee;
        } catch(error) {
            throw new Error(`Error creating employee: ${error.message}`)
        }
    } 

    async getEmployee(employeeId: string): Promise<Employees> {
            const employee = await this.prisma.employees.findUnique({
                where: {
                    id: employeeId
                }
            });

            if (!employee) {
                throw new NotFoundException('Employee not found');
            }
            return employee;
    } 

    async updateEmployee(employeeId: string, updateData: Prisma.EmployeesUpdateInput): Promise<Employees> {
        try {
            const existingEmployee = await this.prisma.employees.findUnique({
                where: {
                    id: employeeId
                }
            });

            if (!existingEmployee) {
                throw new NotFoundException("Employee not found");
            }

            const updatedEmployee = await this.prisma.employees.update({
                where: {
                    id: employeeId
                },
                data: updateData
            });

            return updatedEmployee;
        } catch(error) {
            throw new Error(`Error updating employee: ${error.message}`)
        }
    }

    async deleteEmployee(employeeId: string): Promise<Employees>{
        try {
            const existingEmployee = await this.prisma.employees.findUnique({
                where: {
                    id: employeeId
                }
            })

            if (!existingEmployee) {
                throw new NotFoundException("Employee not found to delete.")
            }

            const deletedEmployee = await this.prisma.employees.delete({
                where: {
                    id: employeeId
                }
            })

            return deletedEmployee;
        } catch(error) {
            throw new Error(`Error deleting employee: ${error.message}`)
        }
    }
}
