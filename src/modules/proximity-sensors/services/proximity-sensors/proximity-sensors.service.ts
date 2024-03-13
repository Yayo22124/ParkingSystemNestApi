import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, ProximitySensors } from '@prisma/client';

import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class ProximitySensorsService {
    constructor(private prisma: PrismaService) {
        
    }

    async getAllProximitySensors(): Promise<ProximitySensors[]> {
        return this.prisma.proximitySensors.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    }

    async getLastProximitySensor(): Promise<ProximitySensors> {
        return this.prisma.proximitySensors.findFirst({
            orderBy: {
                registeredAt: 'desc'
            }
        });
    }

    async createProximitySensor(proximitySensorData: ProximitySensors): Promise<ProximitySensors> {
        try {
            const newProximitySensor: ProximitySensors = await this.prisma.proximitySensors.create({
                data: proximitySensorData
            });
            
            return newProximitySensor;
        } catch(error) {
            throw new Error(error.message)
        }
    } 

    async getProximitySensor(proximitySensorId: string): Promise<ProximitySensors> {
            const proximitySensors = await this.prisma.proximitySensors.findUnique({
                where: {
                    id: proximitySensorId
                }
            });

            if (!proximitySensors) {
                throw new NotFoundException('Proximity Sensor not found');
            }
            return proximitySensors;
    } 

    async updateProximitySensor(proximitySensorId: string, updateData: Prisma.ProximitySensorsUpdateInput): Promise<ProximitySensors> {
        try {
            const existingProximitySensor = await this.prisma.proximitySensors.findUnique({
                where: {
                    id: proximitySensorId
                }
            });

            if (!existingProximitySensor) {
                throw new NotFoundException("Proximity Sensor not found");
            }

            const updatedRecord = await this.prisma.proximitySensors.update({
                where: {
                    id: proximitySensorId
                },
                data: updateData
            });

            return updatedRecord;
        } catch(error) {
            throw new Error(`Error updating proximitySensors: ${error.message}`)
        }
    }

    async deleteProximitySensor(proximitySensorId: string): Promise<ProximitySensors>{
        try {
            const existingProximitySensor = await this.prisma.proximitySensors.findUnique({
                where: {
                    id: proximitySensorId
                }
            })

            if (!existingProximitySensor) {
                throw new NotFoundException("Proximity Sensor not found to delete.")
            }

            const deletedProximitySensor = await this.prisma.proximitySensors.delete({
                where: {
                    id: proximitySensorId
                }
            })

            return deletedProximitySensor;
        } catch(error) {
            throw new Error(`Error deleting proximitySensors: ${error.message}`)
        }
    }
}
