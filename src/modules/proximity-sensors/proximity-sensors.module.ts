import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ProximitySensorsController } from './controllers/proximity-sensors/proximity-sensors.controller';
import { ProximitySensorsService } from './services/proximity-sensors/proximity-sensors.service';

@Module({
  providers: [ProximitySensorsService],
  controllers: [ProximitySensorsController],
  imports: [PrismaModule]
})
export class ProximitySensorsModule {}
