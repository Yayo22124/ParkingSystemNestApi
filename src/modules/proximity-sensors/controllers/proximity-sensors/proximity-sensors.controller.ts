import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { ProximitySensorsService } from '../../services/proximity-sensors/proximity-sensors.service';
import { Response } from 'express';
import { ProximitySensor } from '@prisma/client';

@Controller('proximity-sensors')
export class ProximitySensorsController {
    constructor(
        private proximitySensorsService: ProximitySensorsService
    ) {
        
    }
    @Get()
    async getAllProximitySensors() {
        const proximitySensors = this.proximitySensorsService.getAllProximitySensors();

        return proximitySensors;
    }

    @Get('/last/')
    async getLastProximidySensor() {
        const lastProximitySensor = this.proximitySensorsService.getLastProximitySensor();

        return lastProximitySensor;
    }

    @Get(':id')
    async getProximitySensorById(@Param('id') proximitySensorId: string, @Res() res: Response) {
      try {
        const proximitySensor = await this.proximitySensorsService.getProximitySensor(proximitySensorId);
        return res.status(HttpStatus.FOUND).json({
          success: true,
          data: proximitySensor,
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Proximity Sensor not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error retrieving proximitySensor',
          error: error.message,
        });
      }
    }

    @Post()
    async createProximitySensor(@Body() proximitySensorData: ProximitySensor, @Res() res: Response) {
        try {
            const newHumiditySensor = await this.proximitySensorsService.createProximitySensor(proximitySensorData);

            return res.status(HttpStatus.OK).json({
                success: true,
                data: newHumiditySensor,
                message: "Proximity Sensor created succesfully."
            })
        } catch(error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error creating proximitySensor.",
                error
            })
        }
    }

    @Put(':id')
    async updateProximitySensor(@Param('id') proximitySensorId: string, @Body() updateData: ProximitySensor, @Res() res: Response) {
      try {
        const updatedProximitySensor = await this.proximitySensorsService.updateProximitySensor(proximitySensorId, updateData);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedProximitySensor,
          message: 'Proximity Sensor updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Proximity Sensor not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating proximitySensor',
          error: error.message,
        });
      }
    }

    @Delete(':id')
    async deleteProximitySensor(@Param('id') proximitySensorId: string, @Res() res: Response) {
      try {
        const deletedEmployee = await this.proximitySensorsService.deleteProximitySensor(proximitySensorId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: deletedEmployee,
          message: 'Proximity Sensor deleted successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Proximity Sensor not found to delete.',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error deleting proximitySensor',
          error: error.message,
        });
      }
    }
}
