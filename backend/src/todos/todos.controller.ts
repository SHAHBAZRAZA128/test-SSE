import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos') // 👈 API Route: /todos
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // POST "/todos"
  @Post()
  async createTodo(@Body('todoDescription') todoDescription: string) {
    return this.todosService.createTodo(todoDescription);
  }

  // GET "/todos"
  @Get()
  async getTodos() {
    return this.todosService.getTodos();
  }

  // PUT "/todos/:id" 
  @Put(':id')
  async updateTodo(@Param('id') id: string, @Body('todoDescription') todoDescription: string) {
    return this.todosService.updateTodo(id, todoDescription);
  }

  // DELETE "/todos/:id"
  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
