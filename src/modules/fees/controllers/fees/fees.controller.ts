import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { FeesService } from '../../services/fees/fees.service';
import { Response } from 'express';
import { Fees } from '@prisma/client';

@Controller('fees')
export class FeesController {
    constructor(
        private feesService: FeesService
    ) {
        
    }
    @Get()
    async getAllFees() {
        const fees = this.feesService.getAllFees();

        return fees;
    }

    @Get(':id')
    async getFeeById(@Param('id') feeId: string, @Res() res: Response) {
      try {
        const fee = await this.feesService.getFee(feeId);
        return res.status(HttpStatus.FOUND).json({
          success: true,
          data: fee,
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Fee not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error retrieving fee',
          error: error.message,
        });
      }
    }

    @Post()
    async createFee(@Body() feeData: Fees, @Res() res: Response) {
        try {
            const newFee = await this.feesService.createFee(feeData);

            return res.status(HttpStatus.CREATED).json({
                success: true,
                data: newFee,
                message: "Fee created succesfully."
            })
        } catch(error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error creating fee.",
                error
            })
        }
    }

    @Put(':id')
    async updateFee(@Param('id') feeId: string, @Body() updateData: Fees, @Res() res: Response) {
      try {
        const updatedFee = await this.feesService.updateFee(feeId, updateData);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedFee,
          message: 'Fee updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Fee not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating fee',
          error: error.message,
        });
      }
    }

    @Delete(':id')
    async deleteFee(@Param('id') feeId: string, @Res() res: Response) {
      try {
        const deletedFee = await this.feesService.deleteFee(feeId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: deletedFee,
          message: 'Fee deleted successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Fee not found to delete.',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error deleting fee',
          error: error.message,
        });
      }
    }
}
