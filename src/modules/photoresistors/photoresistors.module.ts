import { Module } from '@nestjs/common';
import { PhotoresistorsController } from './controllers/photoresistors/photoresistors.controller';
import { PhotoresistorsService } from './services/photoresistors/photoresistors.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PhotoresistorsController],
  providers: [PhotoresistorsService],
  imports: [PrismaModule]
})
export class PhotoresistorsModule {}
