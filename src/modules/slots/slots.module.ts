import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SlotsController } from './controllers/slots/slots.controller';
import { SlotsService } from './services/slots/slots.service';

@Module({
  controllers: [SlotsController],
  providers: [SlotsService],
  imports: [PrismaModule]
})
export class SlotsModule {}
