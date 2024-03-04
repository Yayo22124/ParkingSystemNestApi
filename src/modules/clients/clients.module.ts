import { ClientsController } from './controllers/clients/clients.controller';
import { ClientsService } from './services/clients/clients.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [PrismaModule]
})
export class ClientsModule {}
