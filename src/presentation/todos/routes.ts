import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";



export class TodoRoutes {


  static get routes(): Router {

    const router = Router();
    
    const datasource = new TodoDatasourceImpl();
    const todoRepository = new TodoRepositoryImpl( datasource );
    const todoController = new TodosController(todoRepository);

    // router.use('/api/todos', TodoRoutes.routes );
    router.get('/', ( req, res) => todoController.getTodos(req, res));
    router.get('/:id', ( req, res) => todoController.getTodoById(req, res) );
    router.post('/', todoController.createTodo );
    router.put('/:id', todoController.updateTodo );
    router.delete('/:id', todoController.deleteTodo );

    return router;
  }


}