import { EmployeesController } from './controllers/employees/employees.controller';
import { EmployeesService } from './services/employees/employees.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/services/prisma/prisma.service';

@Module({
  providers: [EmployeesService],
  controllers: [EmployeesController],
  imports: [PrismaModule]
})
export class EmployeesModule {
  constructor(
    private prisma: PrismaService
  ) {
  }
}
