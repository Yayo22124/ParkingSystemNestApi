import { Module } from '@nestjs/common';
import { HumiditySensorsService } from './services/humidity-sensors/humidity-sensors.service';
import { HumiditySensorsController } from './controllers/humidity-sensors/humidity-sensors.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [HumiditySensorsService],
  controllers: [HumiditySensorsController],
  imports: [PrismaModule]
})
export class HumiditySensorsModule {}
