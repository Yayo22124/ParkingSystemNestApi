import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { ClientsModule } from './modules/clients/clients.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { FeesModule } from './modules/fees/fees.module';
import { HumiditySensorsModule } from './modules/humidity-sensors/humidity-sensors.module';
import { MorganMiddleware } from './middlewares/morgan/morgan.middleware';
import { PhotoresistorsModule } from './modules/photoresistors/photoresistors.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ProximitySensorsModule } from './modules/proximity-sensors/proximity-sensors.module';
import { RecordsModule } from './modules/records/records.module';
import { SlotsModule } from './modules/slots/slots.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';

@Module({
  imports: [PrismaModule, EmployeesModule, VehiclesModule, SlotsModule, FeesModule, RecordsModule, HumiditySensorsModule, ProximitySensorsModule, PhotoresistorsModule, AuthModule, ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}
