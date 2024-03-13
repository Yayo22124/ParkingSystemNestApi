import { FanActuatorsController } from './controllers/fan-actuators/fan-actuators.controller';
import { FanActuatorsService } from './services/fan-actuators/fan-actuators.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [FanActuatorsService],
  controllers: [FanActuatorsController],
  imports: [PrismaModule]
})
export class FanActuatorsModule {}
