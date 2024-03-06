import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, ProximitySensor } from '@prisma/client';

import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class ProximitySensorsService {
    constructor(private prisma: PrismaService) {
        
    }

    async getAllProximitySensors(): Promise<ProximitySensor[]> {
        return this.prisma.proximitySensor.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    }

    async getLastProximitySensor(): Promise<ProximitySensor> {
        return this.prisma.proximitySensor.findFirst({
            orderBy: {
                registeredAt: 'desc'
            }
        });
    }

    async createProximitySensor(proximitySensorData: ProximitySensor): Promise<ProximitySensor> {
        try {
            const newProximitySensor: ProximitySensor = await this.prisma.proximitySensor.create({
                data: proximitySensorData
            });
            
            return newProximitySensor;
        } catch(error) {
            throw new Error(error.message)
        }
    } 

    async getProximitySensor(proximitySensorId: string): Promise<ProximitySensor> {
            const proximitySensor = await this.prisma.proximitySensor.findUnique({
                where: {
                    id: proximitySensorId
                }
            });

            if (!proximitySensor) {
                throw new NotFoundException('Proximity Sensor not found');
            }
            return proximitySensor;
    } 

    async updateProximitySensor(proximitySensorId: string, updateData: Prisma.ProximitySensorUpdateInput): Promise<ProximitySensor> {
        try {
            const existingProximitySensor = await this.prisma.proximitySensor.findUnique({
                where: {
                    id: proximitySensorId
                }
            });

            if (!existingProximitySensor) {
                throw new NotFoundException("Proximity Sensor not found");
            }

            const updatedRecord = await this.prisma.proximitySensor.update({
                where: {
                    id: proximitySensorId
                },
                data: updateData
            });

            return updatedRecord;
        } catch(error) {
            throw new Error(`Error updating proximitySensor: ${error.message}`)
        }
    }

    async deleteProximitySensor(proximitySensorId: string): Promise<ProximitySensor>{
        try {
            const existingProximitySensor = await this.prisma.proximitySensor.findUnique({
                where: {
                    id: proximitySensorId
                }
            })

            if (!existingProximitySensor) {
                throw new NotFoundException("Proximity Sensor not found to delete.")
            }

            const deletedProximitySensor = await this.prisma.proximitySensor.delete({
                where: {
                    id: proximitySensorId
                }
            })

            return deletedProximitySensor;
        } catch(error) {
            throw new Error(`Error deleting proximitySensor: ${error.message}`)
        }
    }
}
