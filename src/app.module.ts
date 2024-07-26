import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule],
=======

@Module({
  imports: [],
>>>>>>> 48841a878c4fd8f636c21169648e24a9f006a38c
  controllers: [],
  providers: [],
})
export class AppModule {}
