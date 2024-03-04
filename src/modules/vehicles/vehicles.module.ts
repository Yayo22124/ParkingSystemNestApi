import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { VehiclesController } from './controllers/vehicles/vehicles.controller';
import { VehiclesService } from './services/vehicles/vehicles.service';

@Module({
  providers: [VehiclesService],
  controllers: [VehiclesController],
  imports: [PrismaModule]
})
export class VehiclesModule {}
