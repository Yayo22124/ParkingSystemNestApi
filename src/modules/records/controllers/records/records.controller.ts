import { Controller, Param, Body, Get, Post, Put, Delete, HttpStatus, Res, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { RecordsService } from '../../services/records/records.service';
import { Records } from '@prisma/client';

@Controller('records')
export class RecordsController {
    constructor(
        private recordsService: RecordsService
    ) {
        
    }
    @Get()
    async getAllRecords() {
        const records = this.recordsService.getAllRecords();

        return records;
    }

    @Get(':id')
    async getRecordById(@Param('id') recordId: string, @Res() res: Response) {
      try {
        const record = await this.recordsService.getRecord(recordId);
        return res.status(HttpStatus.FOUND).json({
          success: true,
          data: record,
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Record not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error retrieving record',
          error: error.message,
        });
      }
    }

    @Post()
    async createRecord(@Body() recordData: Records, @Res() res: Response) {
        try {
            const newRecord = await this.recordsService.createRecord(recordData);

            return res.status(HttpStatus.CREATED).json({
                success: true,
                data: newRecord,
                message: "Record created succesfully."
            })
        } catch(error) {
            if (error instanceof NotFoundException) {
                return res.status(HttpStatus.NOT_FOUND).json({
                  success: false,
                  message: error.message,
                });
            }
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error creating record.",
                error: error.message
            })
        }
    }

    @Put(':id')
    async updateRecord(@Param('id') recordId: string, @Body() updateData: Records, @Res() res: Response) {
      try {
        const updatedRecord = await this.recordsService.updateRecord(recordId, updateData);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedRecord,
          message: 'Record updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Record not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating record',
          error: error.message,
        });
      }
    }

    @Delete(':id')
    async deleteRecord(@Param('id') recordId: string, @Res() res: Response) {
      try {
        const deletedRecord = await this.recordsService.deleteRecord(recordId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: deletedRecord,
          message: 'Record deleted successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Record not found to delete.',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error deleting record',
          error: error.message,
        });
      }
    }
}
