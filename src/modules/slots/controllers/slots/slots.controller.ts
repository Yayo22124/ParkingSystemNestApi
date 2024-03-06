import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { Slots } from '@prisma/client';
import { Response } from 'express';
import { SlotsService } from '../../services/slots/slots.service';

@Controller('slots')
export class SlotsController {
    constructor(
        private slotsService: SlotsService
    ) {
        
    }
    @Get()
    async getAllSlots() {
        const slots = this.slotsService.getAllSlots();

        return slots;
    }

    @Get(':id')
    async getSlotById(@Param('id') slotId: string, @Res() res: Response) {
      try {
        const slot = await this.slotsService.getSlot(slotId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: slot,
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Slot not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error retrieving slot',
          error: error.message,
        });
      }
    }

    @Post()
    async createSlot(@Body() slotData: Slots, @Res() res: Response) {
        try {
            const newSlot = await this.slotsService.createSlot(slotData);

            return res.status(HttpStatus.OK).json({
                success: true,
                data: newSlot,
                message: "Slot created succesfully."
            })
        } catch(error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error creating slot.",
                error
            })
        }
    }

    @Put(':id')
    async updateSlot(@Param('id') slotId: string, @Body() updateData: Slots, @Res() res: Response) {
      try {
        const updatedSlot = await this.slotsService.updateSlot(slotId, updateData);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedSlot,
          message: 'Slot updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Slot not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating slot',
          error: error.message,
        });
      }
    }

    @Put(':number')
    async updateSlotByNumber(@Param('number') slotNumber: number, @Res() res: Response) {
      try {
        const updatedSlot = await this.slotsService.updateSlotByNumber(slotNumber);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedSlot,
          message: 'Slot updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Slot not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating slot',
          error: error.message,
        });
      }
    }

    @Delete(':id')
    async deleteSlot(@Param('id') slotId: string, @Res() res: Response) {
      try {
        const deletedSlot = await this.slotsService.deleteSlot(slotId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: deletedSlot,
          message: 'Slot deleted successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Slot not found to delete.',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error deleting slot',
          error: error.message,
        });
      }
    }
}
