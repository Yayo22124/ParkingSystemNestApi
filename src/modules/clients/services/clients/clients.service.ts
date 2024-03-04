import { Clients, Prisma } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/modules/prisma/services/prisma/prisma.service';

@Injectable()
export class ClientsService {
    constructor(
        private prisma: PrismaService
    ) {
        
    }
    async getAllClients(): Promise<Clients[]> {
        return this.prisma.clients.findMany({
            orderBy: {
                name: 'asc'
            }
        });
    }

    async createClient(clientData: Prisma.ClientsCreateInput): Promise<Clients> {
        try {
            const newClient = await this.prisma.clients.create({
                data: clientData
            });

            return newClient;
        } catch(error) {
            throw new Error(`Error creating client: ${error.message}`)
        }
    } 

    async getClient(clientId: string): Promise<Clients> {
            const client = await this.prisma.clients.findUnique({
                where: {
                    id: clientId
                }
            });

            if (!client) {
                throw new NotFoundException('Client not found');
            }
            return client;
    } 

    async updateClient(clientId: string, updateData: Prisma.ClientsUpdateInput): Promise<Clients> {
        try {
            const existingClient = await this.prisma.clients.findUnique({
                where: {
                    id: clientId
                }
            });

            if (!existingClient) {
                throw new NotFoundException("Client not found");
            }

            const updatedClient = await this.prisma.clients.update({
                where: {
                    id: clientId
                },
                data: updateData
            });

            return updatedClient;
        } catch(error) {
            throw new Error(`Error updating client: ${error.message}`)
        }
    }

    async deleteClient(clientId: string): Promise<Clients>{
        try {
            const existingClient = await this.prisma.clients.findUnique({
                where: {
                    id: clientId
                }
            })

            if (!existingClient) {
                throw new NotFoundException("Client not found to delete.")
            }

            const deletedClient = await this.prisma.clients.delete({
                where: {
                    id: clientId
                }
            })

            return deletedClient;
        } catch(error) {
            throw new Error(`Error deleting client: ${error.message}`)
        }
    }
}
