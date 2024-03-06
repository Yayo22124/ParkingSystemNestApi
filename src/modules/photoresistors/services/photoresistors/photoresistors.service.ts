import { Injectable, NotFoundException } from '@nestjs/common';
import { Photoresistors, Prisma } from '@prisma/client';

import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class PhotoresistorsService {
    constructor(private prisma: PrismaService) {
        
    }

    async getAllPhotoresistors(): Promise<Photoresistors[]> {
        return this.prisma.photoresistors.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    }

    async getLastPhotoresistor(): Promise<Photoresistors> {
        return this.prisma.photoresistors.findFirst({
            orderBy: {
                createdAt: 'desc'
            }
        });
    }

    async createPhotoresistor(photoresistorData: Photoresistors): Promise<Photoresistors> {
        try {
            const newPhotoresistor: Photoresistors = await this.prisma.photoresistors.create({
                data: photoresistorData
            });
            
            return newPhotoresistor;
        } catch(error) {
            throw new Error(error.message)
        }
    } 

    async getPhotoresistor(photoresistorId: string): Promise<Photoresistors> {
            const photoresistors = await this.prisma.photoresistors.findUnique({
                where: {
                    id: photoresistorId
                }
            });

            if (!photoresistors) {
                throw new NotFoundException('Photoresistor not found');
            }
            return photoresistors;
    } 

    async updatePhotoresistor(photoresistorId: string, updateData: Prisma.PhotoresistorsUpdateInput): Promise<Photoresistors> {
        try {
            const existingPhotoresistor = await this.prisma.photoresistors.findUnique({
                where: {
                    id: photoresistorId
                }
            });

            if (!existingPhotoresistor) {
                throw new NotFoundException("Photoresistor not found");
            }

            const updatedRecord = await this.prisma.photoresistors.update({
                where: {
                    id: photoresistorId
                },
                data: updateData
            });

            return updatedRecord;
        } catch(error) {
            throw new Error(`Error updating photoresistors: ${error.message}`)
        }
    }

    async deletePhotoresistor(photoresistorId: string): Promise<Photoresistors>{
        try {
            const existingPhotoresistor = await this.prisma.photoresistors.findUnique({
                where: {
                    id: photoresistorId
                }
            })

            if (!existingPhotoresistor) {
                throw new NotFoundException("Photoresistor not found to delete.")
            }

            const deletedPhotoresistor = await this.prisma.photoresistors.delete({
                where: {
                    id: photoresistorId
                }
            })

            return deletedPhotoresistor;
        } catch(error) {
            throw new Error(`Error deleting photoresistors: ${error.message}`)
        }
    }
}
