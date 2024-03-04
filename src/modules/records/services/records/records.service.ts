import { Fees, Prisma, Records, Slots, Vehicles } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class RecordsService {
    constructor(
        private prisma: PrismaService
    ) {
        
    }
    async getAllRecords(): Promise<Records[]> {
        return this.prisma.records.findMany({
            orderBy: {
                entryDate: 'asc'
            }
        });
    }

    async createRecord(recordData: Records): Promise<Records> {
        try {
            const feeId = recordData.feeId; 
            const existingFee: Fees = await this.prisma.fees.findUnique({
                where:{
                    id: feeId
                }
            })

            
            const slotId = recordData.slotId; 
            const existingSlot: Slots = await this.prisma.slots.findUnique({
                where:{
                    id: slotId
                }
            })
            
            
            const vehicleId = recordData.vehicleId; 
            const existingVehicle: Vehicles = await this.prisma.vehicles.findUnique({
                where:{
                    id: vehicleId
                }
            })
            
            if (!existingVehicle) {
                throw new NotFoundException("Vehicle not found for record.")
            }
            if (!existingFee) {
                throw new NotFoundException("Fee not found for record.")
            }
            if (!existingSlot) {
                throw new NotFoundException("Slot not found for record.")
            }
            
            const newRecord: Records = await this.prisma.records.create({
                data: recordData
            });
            
            return newRecord;
        } catch(error) {
            throw new Error(error.message)
        }
    } 

    async getRecord(recordId: string): Promise<Records> {
            const record = await this.prisma.records.findUnique({
                where: {
                    id: recordId
                }
            });

            if (!record) {
                throw new NotFoundException('Record not found');
            }
            return record;
    } 

    async updateRecord(recordId: string, updateData: Prisma.RecordsUpdateInput): Promise<Records> {
        try {
            const existingRecord = await this.prisma.records.findUnique({
                where: {
                    id: recordId
                }
            });

            if (!existingRecord) {
                throw new NotFoundException("Record not found");
            }

            const updatedRecord = await this.prisma.records.update({
                where: {
                    id: recordId
                },
                data: updateData
            });

            return updatedRecord;
        } catch(error) {
            throw new Error(`Error updating record: ${error.message}`)
        }
    }

    async deleteRecord(recordId: string): Promise<Records>{
        try {
            const existingRecord = await this.prisma.records.findUnique({
                where: {
                    id: recordId
                }
            })

            if (!existingRecord) {
                throw new NotFoundException("Record not found to delete.")
            }

            const deletedRecord = await this.prisma.records.delete({
                where: {
                    id: recordId
                }
            })

            return deletedRecord;
        } catch(error) {
            throw new Error(`Error deleting record: ${error.message}`)
        }
    }
}
