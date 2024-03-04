import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Slots } from '@prisma/client';

import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class SlotsService {
    constructor(
        private prisma: PrismaService
    ) {
        
    }
    async getAllSlots(): Promise<Slots[]> {
        return this.prisma.slots.findMany({
            orderBy: {
                number: 'asc'
            }
        });
    }

    async createSlot(slotData: Prisma.SlotsCreateInput): Promise<Slots> {
        try {
            const newSlot = await this.prisma.slots.create({
                data: slotData
            });

            return newSlot;
        } catch(error) {
            throw new Error(`Error creating slot: ${error.message}`)
        }
    } 

    async getSlot(slotId: string): Promise<Slots> {
            const slot = await this.prisma.slots.findUnique({
                where: {
                    id: slotId
                }
            });

            if (!slot) {
                throw new NotFoundException('Slot not found');
            }
            return slot;
    } 

    async updateSlot(slotId: string, updateData: Prisma.SlotsUpdateInput): Promise<Slots> {
        try {
            const existingSlot = await this.prisma.slots.findUnique({
                where: {
                    id: slotId
                }
            });

            if (!existingSlot) {
                throw new NotFoundException("Slot not found");
            }

            const updatedSlot = await this.prisma.slots.update({
                where: {
                    id: slotId
                },
                data: updateData
            });

            return updatedSlot;
        } catch(error) {
            throw new Error(`Error updating slot: ${error.message}`)
        }
    }

    async updateSlotByNumber(slotNumber: number): Promise<Slots> {
        try {
            const existingSlot = await this.prisma.slots.findUnique({
                where: {
                    number: slotNumber
                }
            });

            if (!existingSlot) {
                throw new NotFoundException("Slot not found");
            }

            const newStatus: boolean = !existingSlot.status;

            const updatedSlot = await this.prisma.slots.update({
                where: {
                    number: slotNumber
                },
                data: {
                    status: newStatus
                }
            });

            return updatedSlot;
        } catch(error) {
            throw new Error(`Error updating slot: ${error.message}`)
        }
    }

    async deleteSlot(slotId: string): Promise<Slots>{
        try {
            const existingSlot = await this.prisma.slots.findUnique({
                where: {
                    id: slotId
                }
            })

            if (!existingSlot) {
                throw new NotFoundException("Slot not found to delete.")
            }

            const deletedSlot = await this.prisma.slots.delete({
                where: {
                    id: slotId
                }
            })

            return deletedSlot;
        } catch(error) {
            throw new Error(`Error deleting slot: ${error.message}`)
        }
    }
}
