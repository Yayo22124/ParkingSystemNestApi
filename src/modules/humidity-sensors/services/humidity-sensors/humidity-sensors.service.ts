import { HumiditySensors, Prisma } from '@prisma/client';

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class HumiditySensorsService {
    constructor(private prisma: PrismaService) {
        
    }

    async getAllHumiditySensors(): Promise<HumiditySensors[]> {
        return this.prisma.humiditySensors.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    }

    async createHumiditySensor(humiditySensorData: HumiditySensors): Promise<HumiditySensors> {
        try {
            const newHumiditySensor: HumiditySensors = await this.prisma.humiditySensors.create({
                data: humiditySensorData
            });
            
            return newHumiditySensor;
        } catch(error) {
            throw new Error(error.message)
        }
    } 

    async getHumiditySensor(humiditySensorId: string): Promise<HumiditySensors> {
            const humiditySensor = await this.prisma.humiditySensors.findUnique({
                where: {
                    id: humiditySensorId
                }
            });

            if (!humiditySensor) {
                throw new NotFoundException('Humidity Sensor not found');
            }
            return humiditySensor;
    } 

    async updateHumiditySensor(humiditySensorId: string, updateData: Prisma.HumiditySe): Promise<HumiditySensors> {
        try {
            const existingRecord = await this.prisma.humiditySensors.findUnique({
                where: {
                    id: humiditySensorId
                }
            });

            if (!existingRecord) {
                throw new NotFoundException("Humidity Sensor not found");
            }

            const updatedRecord = await this.prisma.humiditySensors.update({
                where: {
                    id: humiditySensorId
                },
                data: updateData
            });

            return updatedRecord;
        } catch(error) {
            throw new Error(`Error updating humiditySensor: ${error.message}`)
        }
    }

    async deleteHumiditySensor(humiditySensorId: string): Promise<HumiditySensors>{
        try {
            const existingRecord = await this.prisma.humiditySensors.findUnique({
                where: {
                    id: humiditySensorId
                }
            })

            if (!existingRecord) {
                throw new NotFoundException("Humidity Sensor not found to delete.")
            }

            const deletedRecord = await this.prisma.humiditySensors.delete({
                where: {
                    id: humiditySensorId
                }
            })

            return deletedRecord;
        } catch(error) {
            throw new Error(`Error deleting humiditySensor: ${error.message}`)
        }
    }
}
