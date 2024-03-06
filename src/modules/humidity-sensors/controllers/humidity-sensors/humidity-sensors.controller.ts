import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { HumiditySensors } from '@prisma/client';
import { Response } from 'express';
import { HumiditySensorsService } from '../../services/humidity-sensors/humidity-sensors.service';

@Controller('humidity-sensors')
export class HumiditySensorsController {
    constructor(
        private humiditySensorsService: HumiditySensorsService
    ) {
        
    }
    @Get()
    async getAllEmployees() {
        const humiditySensors = this.humiditySensorsService.getAllHumiditySensors();

        return humiditySensors;
    }
    
    @Get('/last/')
    async getLastHumiditySensor() {
        const lastHumiditySensor = this.humiditySensorsService.getLastHumiditySensor();

        return lastHumiditySensor;
    }

    @Get(':id')
    async getEmployeeById(@Param('id') employeeId: string, @Res() res: Response) {
      try {
        const humiditySensor = await this.humiditySensorsService.getHumiditySensor(employeeId);
        return res.status(HttpStatus.FOUND).json({
          success: true,
          data: humiditySensor,
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Humidity Sensor not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error retrieving humiditySensor',
          error: error.message,
        });
      }
    }

    @Post()
    async createHumiditySensor(@Body() humiditySensorData: HumiditySensors, @Res() res: Response) {
        try {
            const newHumiditySensor = await this.humiditySensorsService.createHumiditySensor(humiditySensorData);

            return res.status(HttpStatus.OK).json({
                success: true,
                data: newHumiditySensor,
                message: "Humidity Sensor created succesfully."
            })
        } catch(error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error creating humiditySensor.",
                error
            })
        }
    }

    @Put(':id')
    async updateHumiditySensor(@Param('id') employeeId: string, @Body() updateData: HumiditySensors, @Res() res: Response) {
      try {
        const updatedEmployee = await this.humiditySensorsService.updateHumiditySensor(employeeId, updateData);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedEmployee,
          message: 'Humidity Sensor updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Humidity Sensor not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating humiditySensor',
          error: error.message,
        });
      }
    }

    @Delete(':id')
    async deleteHumiditySensor(@Param('id') employeeId: string, @Res() res: Response) {
      try {
        const deletedEmployee = await this.humiditySensorsService.deleteHumiditySensor(employeeId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: deletedEmployee,
          message: 'Humidity Sensor deleted successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Humidity Sensor not found to delete.',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error deleting humiditySensor',
          error: error.message,
        });
      }
    }
}
