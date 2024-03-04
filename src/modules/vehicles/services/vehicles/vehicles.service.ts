import { Clients, Prisma, Vehicles } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class VehiclesService {
    constructor(
        private prisma: PrismaService
    ) {
        
    }
    async getAllVehicles(): Promise<Vehicles[]> {
        return this.prisma.vehicles.findMany({
            orderBy: {
                plate: 'asc'
            }
        });
    }

    async createVehicle(vehicleData: Vehicles): Promise<Vehicles> {
        try {
            const ownerId = vehicleData.owner; 
            const existingOwner: Clients = await this.prisma.clients.findUnique({
                where:{
                    id: ownerId
                }
            })

            if (!existingOwner) {
                throw new NotFoundException("Owner not found for vehicle.")
            }
            const newVehicle: Vehicles = await this.prisma.vehicles.create({
                data: vehicleData
            });

            return newVehicle;
        } catch(error) {
            throw new Error(`Error creating vehicle: ${error.message}`)
        }
    } 

    async getVehicle(vehicleId: string): Promise<Vehicles> {
            const vehicle = await this.prisma.vehicles.findUnique({
                where: {
                    id: vehicleId
                }
            });

            if (!vehicle) {
                throw new NotFoundException('Vehicle not found');
            }
            return vehicle;
    } 

    async updateVehicle(vehicleId: string, updateData: Prisma.VehiclesUpdateInput): Promise<Vehicles> {
        try {
            const existingVehicle = await this.prisma.vehicles.findUnique({
                where: {
                    id: vehicleId
                }
            });

            if (!existingVehicle) {
                throw new NotFoundException("Vehicle not found");
            }

            const updatedVehicle = await this.prisma.vehicles.update({
                where: {
                    id: vehicleId
                },
                data: updateData
            });

            return updatedVehicle;
        } catch(error) {
            throw new Error(`Error updating vehicle: ${error.message}`)
        }
    }

    async deleteVehicle(vehicleId: string): Promise<Vehicles>{
        try {
            const existingVehicle = await this.prisma.vehicles.findUnique({
                where: {
                    id: vehicleId
                }
            })

            if (!existingVehicle) {
                throw new NotFoundException("Vehicle not found to delete.")
            }

            const deletedVehicle = await this.prisma.vehicles.delete({
                where: {
                    id: vehicleId
                }
            })

            return deletedVehicle;
        } catch(error) {
            throw new Error(`Error deleting vehicle: ${error.message}`)
        }
    }
}
