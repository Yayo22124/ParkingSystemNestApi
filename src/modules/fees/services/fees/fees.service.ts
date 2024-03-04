import { Fees, Prisma } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class FeesService {
    constructor(
        private prisma: PrismaService
    ) {
        
    }
    async getAllFees(): Promise<Fees[]> {
        return this.prisma.fees.findMany({
            orderBy: {
                name: 'asc'
            }
        });
    }

    async createFee(feeData: Prisma.FeesCreateInput): Promise<Fees> {
        try {
            const newFee = await this.prisma.fees.create({
                data: feeData
            });

            return newFee;
        } catch(error) {
            throw new Error(`Error creating fee: ${error.message}`)
        }
    } 

    async getFee(feeId: string): Promise<Fees> {
            const fee = await this.prisma.fees.findUnique({
                where: {
                    id: feeId
                }
            });

            if (!fee) {
                throw new NotFoundException('Fee not found');
            }
            return fee;
    } 

    async updateFee(feeId: string, updateData: Prisma.FeesUpdateInput): Promise<Fees> {
        try {
            const existingFee = await this.prisma.fees.findUnique({
                where: {
                    id: feeId
                }
            });

            if (!existingFee) {
                throw new NotFoundException("Fee not found");
            }

            const updatedFee = await this.prisma.fees.update({
                where: {
                    id: feeId
                },
                data: updateData
            });

            return updatedFee;
        } catch(error) {
            throw new Error(`Error updating fee: ${error.message}`)
        }
    }

    async deleteFee(feeId: string): Promise<Fees>{
        try {
            const existingFee = await this.prisma.fees.findUnique({
                where: {
                    id: feeId
                }
            })

            if (!existingFee) {
                throw new NotFoundException("Fee not found to delete.")
            }

            const deletedFee = await this.prisma.fees.delete({
                where: {
                    id: feeId
                }
            })

            return deletedFee;
        } catch(error) {
            throw new Error(`Error deleting fee: ${error.message}`)
        }
    }
}
