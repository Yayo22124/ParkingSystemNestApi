import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { EmployeesModule } from '../employees/employees.module';
import { EmployeesService } from '../employees/services/employees/employees.service';
import {JwtModule} from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [AuthService, EmployeesService],
  controllers: [AuthController],
  imports: [PrismaModule, EmployeesModule, JwtModule.register({
    global: true,
    secret: process.env.SECRET,
    signOptions: {
      expiresIn: '120m'
    }
  })]
})
export class AuthModule {}
