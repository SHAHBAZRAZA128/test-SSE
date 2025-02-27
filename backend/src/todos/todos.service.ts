import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ObjectId } from 'mongodb';

@Injectable()
export class TodosService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createTodo(todo: string) {
    try {
      if (!todo.trim()) {
        throw new BadRequestException('Todo description cannot be empty.');
      }
  
      const result = await this.databaseService
        .getCollection('todolists')
        .insertOne({ todoDescription: todo });
  
      return {
        message: 'Todo created successfully', 
        todoItem: {
          id: result.insertedId,
          todoDescription: todo,
        },
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to create todo', error.message);
    }
  }
  
  async getTodos() {
    try {
      const todos = await this.databaseService.getCollection('todolists').find({}).toArray();
  
      if (todos.length === 0) {
        return { message: 'No data to show', todoItem: [] }; 
      }
  
      return { message: 'Todos fetched successfully', todoItem: todos }; 
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch todos', error.message);
    }
  }
  
  async updateTodo(id: string, todo: string) {
    try {
      if (!ObjectId.isValid(id)) {
        throw new BadRequestException('Invalid ID format.');
      }
  
      if (!todo.trim()) {
        throw new BadRequestException('Todo description cannot be empty.');
      }
  
      const result = await this.databaseService
        .getCollection('todolists')
        .updateOne(
          { _id: new ObjectId(id) },
          { $set: { todoDescription: todo } }
        );
  
      if (result.matchedCount === 0) {
        throw new NotFoundException('Todo not found.');
      }
  
      if (result.modifiedCount === 0) {
        return {
          message: 'Todo not found or already updated',
        todoItem: { id, todoDescription: todo },
        };
      }
  
      return {
        message: 'Todo updated successfully', 
todoItem: { id, todoDescription: todo },
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to update todo', error.message);
    }
  }
  
  async deleteTodo(id: string) {
    try {
      if (!ObjectId.isValid(id)) {
        throw new BadRequestException('Invalid ID format.');
      }
  
      const result = await this.databaseService
        .getCollection('todolists')
        .deleteOne({ _id: new ObjectId(id) });
  
      if (result.deletedCount === 0) {
        throw new NotFoundException('Todo not found.');
      }
  
      return {
        message: 'Todo deleted successfully', 
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete todo', error.message);
    }
  }
  
}
