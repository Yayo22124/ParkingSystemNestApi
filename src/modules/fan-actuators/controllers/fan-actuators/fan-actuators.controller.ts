import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { FanActuators } from '@prisma/client';
import { Response } from 'express';
import { FanActuatorsService } from '../../services/fan-actuators/fan-actuators.service';

@Controller('fan-actuators')
export class FanActuatorsController {
    constructor(
        private fanActuatorsService: FanActuatorsService
    ) {
        
    }
    @Get()
    async getAllFanActuators() {
        const fanActuators = this.fanActuatorsService.getAllFanActuators();

        return fanActuators;
    }

    @Get('/last/')
    async getLastProximidySensor() {
        const lastFanActuator = this.fanActuatorsService.getLastFanActuator();

        return lastFanActuator;
    }

    @Get(':id')
    async getFanActuatorById(@Param('id') fanActuatorId: string, @Res() res: Response) {
      try {
        const FAN = await this.fanActuatorsService.getFanActuator(fanActuatorId);
        return res.status(HttpStatus.FOUND).json({
          success: true,
          data: FAN,
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'FAN Actuator not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error retrieving FAN',
          error: error.message,
        });
      }
    }

    @Post()
    async createFanActuator(@Body() proximitySensorData: FanActuators, @Res() res: Response) {
        try {
            const newFan = await this.fanActuatorsService.createFanActuator(proximitySensorData);

            return res.status(HttpStatus.OK).json({
                success: true,
                data: newFan,
                message: "FAN Actuator created succesfully."
            })
        } catch(error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error creating FAN.",
                error
            })
        }
    }

    @Put(':id')
    async updateFanActuator(@Param('id') fanActuatorId: string, @Body() updateData: FanActuators, @Res() res: Response) {
      try {
        const updatedFanActuator = await this.fanActuatorsService.updateFanActuator(fanActuatorId, updateData);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedFanActuator,
          message: 'FAN Actuator updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'FAN Actuator not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating FAN',
          error: error.message,
        });
      }
    }

    @Delete(':id')
    async deleteFanActuator(@Param('id') fanActuatorId: string, @Res() res: Response) {
      try {
        const deletedFAN = await this.fanActuatorsService.deleteFanActuator(fanActuatorId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: deletedFAN,
          message: 'FAN Actuator deleted successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'FAN Actuator not found to delete.',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error deleting FAN',
          error: error.message,
        });
      }
    }
}
