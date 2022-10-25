import { Module } from '@nestjs/common';
import { InoutService } from './inout.service';
import { InoutController } from './inout.controller';
import { Inout } from './entities/inout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Inout])],
  controllers: [InoutController],
  providers: [InoutService],
})
export class InoutModule {}
