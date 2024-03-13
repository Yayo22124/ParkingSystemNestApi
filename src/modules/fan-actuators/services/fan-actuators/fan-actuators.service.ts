import { FanActuators, Prisma } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class FanActuatorsService {
    constructor(private prisma: PrismaService) {
        
    }

    async getAllFanActuators(): Promise<FanActuators[]> {
        return this.prisma.fanActuators.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    }

    async getLastFanActuator(): Promise<FanActuators> {
        return this.prisma.fanActuators.findFirst({
            orderBy: {
                registeredAt: 'desc'
            }
        });
    }

    async createFanActuator(fanActuatorData: FanActuators): Promise<FanActuators> {
        try {
            const newFan: FanActuators = await this.prisma.fanActuators.create({
                data: fanActuatorData
            });
            
            return newFan;
        } catch(error) {
            throw new Error(error.message)
        }
    } 

    async getFanActuator(fanActuatorId: string): Promise<FanActuators> {
            const FanActuator = await this.prisma.fanActuators.findUnique({
                where: {
                    id: fanActuatorId
                }
            });

            if (!FanActuator) {
                throw new NotFoundException('FAN Actuator not found');
            }
            return FanActuator;
    } 

    async updateFanActuator(fanActuatorId: string, updateData: Prisma.FanActuatorsUpdateInput): Promise<FanActuators> {
        try {
            const existingRecord = await this.prisma.fanActuators.findUnique({
                where: {
                    id: fanActuatorId
                }
            });

            if (!existingRecord) {
                throw new NotFoundException("FAN Actuator not found");
            }

            const updatedFan = await this.prisma.fanActuators.update({
                where: {
                    id: fanActuatorId
                },
                data: updateData
            });

            return updatedFan;
        } catch(error) {
            throw new Error(`Error updating FanActuator: ${error.message}`)
        }
    }

    async deleteFanActuator(fanActuatorId: string): Promise<FanActuators>{
        try {
            const existingRecord = await this.prisma.fanActuators.findUnique({
                where: {
                    id: fanActuatorId
                }
            })

            if (!existingRecord) {
                throw new NotFoundException("FAN Actuator not found to delete.")
            }

            const deletedRecord = await this.prisma.fanActuators.delete({
                where: {
                    id: fanActuatorId
                }
            })

            return deletedRecord;
        } catch(error) {
            throw new Error(`Error deleting FanActuator: ${error.message}`)
        }
    }
}
