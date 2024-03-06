import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { Photoresistors } from '@prisma/client';
import { PhotoresistorsService } from '../../services/photoresistors/photoresistors.service';
import { Response } from 'express';

@Controller('photoresistors')
export class PhotoresistorsController {
    constructor(
        private photoresistorsService: PhotoresistorsService
    ) {
        
    }
    @Get()
    async getAllProximitySensors() {
        const photoresistors = this.photoresistorsService.getAllPhotoresistors();

        return photoresistors;
    }

    @Get('/last/')
    async getLastPhotoresistor() {
        const lastPhotoresistor = this.photoresistorsService.getLastPhotoresistor();

        return lastPhotoresistor;
    }

    @Get(':id')
    async getProximitySensorById(@Param('id') photoresistorId: string, @Res() res: Response) {
      try {
        const photoresistor = await this.photoresistorsService.getPhotoresistor(photoresistorId);
        return res.status(HttpStatus.FOUND).json({
          success: true,
          data: photoresistor,
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Photoresistor not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error retrieving photoresistor',
          error: error.message,
        });
      }
    }

    @Post()
    async createPhotoresistor(@Body() proximitySensorData: Photoresistors, @Res() res: Response) {
        try {
            const newPhotoresistor = await this.photoresistorsService.createPhotoresistor(proximitySensorData);

            return res.status(HttpStatus.OK).json({
                success: true,
                data: newPhotoresistor,
                message: "Photoresistor created succesfully."
            })
        } catch(error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error creating photoresistor.",
                error
            })
        }
    }

    @Put(':id')
    async updatePhotoresistor(@Param('id') photoresistorId: string, @Body() updateData: Photoresistors, @Res() res: Response) {
      try {
        const updatedPhotoresistor = await this.photoresistorsService.updatePhotoresistor(photoresistorId, updateData);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedPhotoresistor,
          message: 'Photoresistor updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Photoresistor not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating photoresistor',
          error: error.message,
        });
      }
    }

    @Delete(':id')
    async deletePhotoresistor(@Param('id') photoresistorId: string, @Res() res: Response) {
      try {
        const deletedEmployee = await this.photoresistorsService.deletePhotoresistor(photoresistorId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: deletedEmployee,
          message: 'Photoresistor deleted successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Photoresistor not found to delete.',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error deleting photoresistor',
          error: error.message,
        });
      }
    }
}
