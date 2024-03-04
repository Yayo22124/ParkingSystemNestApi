import { Controller, Get, Put, Delete, Post, Param, Res, HttpStatus, NotFoundException, Body } from '@nestjs/common';
import { VehiclesService } from '../../services/vehicles/vehicles.service';
import { Vehicles } from '@prisma/client';
import { Response } from 'express';

@Controller('vehicles')
export class VehiclesController {
    constructor(
        private vehiclesService: VehiclesService
    ) {
        
    }
    @Get()
    async getAllVehicles() {
        const vehicles = this.vehiclesService.getAllVehicles();

        return vehicles;
    }

    @Get(':id')
    async getVehicleById(@Param('id') vehicleId: string, @Res() res: Response) {
      try {
        const vehicle = await this.vehiclesService.getVehicle(vehicleId);
        return res.status(HttpStatus.FOUND).json({
          success: true,
          data: vehicle,
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Vehicle not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error retrieving vehicle',
          error: error.message,
        });
      }
    }

    @Post()
    async createVehicle(@Body() vehicleData: Vehicles, @Res() res: Response) {
        try {
            const newVehicle = await this.vehiclesService.createVehicle(vehicleData);

            return res.status(HttpStatus.CREATED).json({
                success: true,
                data: newVehicle,
                message: "Vehicle created succesfully."
            })
        } catch(error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error creating vehicle.",
                error: error.message
            })
        }
    }

    @Put(':id')
    async updateVehicle(@Param('id') vehicleId: string, @Body() updateData: Vehicles, @Res() res: Response) {
      try {
        const updatedVehicle = await this.vehiclesService.updateVehicle(vehicleId, updateData);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedVehicle,
          message: 'Vehicle updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Vehicle not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating vehicle',
          error: error.message,
        });
      }
    }

    @Delete(':id')
    async deleteVehicle(@Param('id') vehicleId: string, @Res() res: Response) {
      try {
        const deletedVehicle = await this.vehiclesService.deleteVehicle(vehicleId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: deletedVehicle,
          message: 'Vehicle deleted successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Vehicle not found to delete.',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error deleting vehicle',
          error: error.message,
        });
      }
    }
}
