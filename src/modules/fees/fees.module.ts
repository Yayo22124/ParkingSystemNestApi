import { FeesController } from './controllers/fees/fees.controller';
import { FeesService } from './services/fees/fees.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [FeesService],
  controllers: [FeesController],
  imports: [PrismaModule]
})
export class FeesModule {}
