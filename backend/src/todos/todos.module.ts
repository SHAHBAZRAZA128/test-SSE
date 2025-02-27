import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { DatabaseService } from '../database/database.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule], 
  controllers: [TodosController],
  providers: [TodosService, DatabaseService], 
})
export class TodosModule {}
