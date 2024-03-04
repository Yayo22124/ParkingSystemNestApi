import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';

import { Employees } from '@prisma/client';
import { EmployeesService } from '../../services/employees/employees.service';
import { Response } from 'express';

@Controller('employees')
export class EmployeesController {
    constructor(
        private employeesService: EmployeesService
    ) {
        
    }
    @Get()
    async getAllEmployees() {
        const employees = this.employeesService.getAllEmployees();

        return employees;
    }

    @Get(':id')
    async getEmployeeById(@Param('id') employeeId: string, @Res() res: Response) {
      try {
        const employee = await this.employeesService.getEmployee(employeeId);
        return res.status(HttpStatus.FOUND).json({
          success: true,
          data: employee,
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Employee not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error retrieving employee',
          error: error.message,
        });
      }
    }

    @Post()
    async createEmployee(@Body() employeeData: Employees, @Res() res: Response) {
        try {
            const newEmployee = await this.employeesService.createEmployee(employeeData);

            return res.status(HttpStatus.CREATED).json({
                success: true,
                data: newEmployee,
                message: "Employee created succesfully."
            })
        } catch(error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error creating employee.",
                error
            })
        }
    }

    @Put(':id')
    async updateEmployee(@Param('id') employeeId: string, @Body() updateData: Employees, @Res() res: Response) {
      try {
        const updatedEmployee = await this.employeesService.updateEmployee(employeeId, updateData);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedEmployee,
          message: 'Employee updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Employee not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating employee',
          error: error.message,
        });
      }
    }

    @Delete(':id')
    async deleteEmployee(@Param('id') employeeId: string, @Res() res: Response) {
      try {
        const deletedEmployee = await this.employeesService.deleteEmployee(employeeId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: deletedEmployee,
          message: 'Employee deleted successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Employee not found to delete.',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error deleting employee',
          error: error.message,
        });
      }
    }
}
