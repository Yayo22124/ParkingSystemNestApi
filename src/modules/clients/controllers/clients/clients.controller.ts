import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { ClientsService } from '../../services/clients/clients.service';
import { Clients } from '@prisma/client';

@Controller('clients')
export class ClientsController {
    constructor(
        private clientsService: ClientsService
    ) {
        
    }
    @Get()
    async getAllClients() {
        const clients = this.clientsService.getAllClients();

        return clients;
    }

    @Get(':id')
    async getClientById(@Param('id') clientId: string, @Res() res: Response) {
      try {
        const client = await this.clientsService.getClient(clientId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: client,
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Client not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error retrieving client',
          error: error.message,
        });
      }
    }

    @Post()
    async createClient(@Body() clientData: Clients, @Res() res: Response) {
        try {
            const newClient = await this.clientsService.createClient(clientData);

            return res.status(HttpStatus.CREATED).json({
                success: true,
                data: newClient,
                message: "Client created succesfully."
            })
        } catch(error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error creating client.",
                error
            })
        }
    }

    @Put(':id')
    async updateClient(@Param('id') clientId: string, @Body() updateData: Clients, @Res() res: Response) {
      try {
        const updatedClient = await this.clientsService.updateClient(clientId, updateData);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: updatedClient,
          message: 'Client updated successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Client not found',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error updating client',
          error: error.message,
        });
      }
    }

    @Delete(':id')
    async deleteClient(@Param('id') clientId: string, @Res() res: Response) {
      try {
        const deletedClient = await this.clientsService.deleteClient(clientId);
        return res.status(HttpStatus.OK).json({
          success: true,
          data: deletedClient,
          message: 'Client deleted successfully.',
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          return res.status(HttpStatus.NOT_FOUND).json({
            success: false,
            message: 'Client not found to delete.',
          });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: 'Error deleting client',
          error: error.message,
        });
      }
    }
}
