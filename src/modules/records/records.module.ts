import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RecordsController } from './controllers/records/records.controller';
import { RecordsService } from './services/records/records.service';

@Module({
  controllers: [RecordsController],
  providers: [RecordsService],
  imports: [PrismaModule]
})
export class RecordsModule {}
