import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodosModule } from './todos/todos.module';
import { DatabaseService } from './database/database.service';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TodosModule
  ],
  providers: [DatabaseService],
})
export class AppModule {}
