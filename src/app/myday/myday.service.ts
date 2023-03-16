import { Injectable } from '@angular/core';
import {TaskModel} from "../models/task.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MydayService {
  constructor() { }
  //Array of tasks:
  private tasks: TaskModel[] = [];
  private tasksSubject = new BehaviorSubject<TaskModel[]>(this.tasks);

  //Methods:

  getTasks(){
    return this.tasksSubject.asObservable();
  }

  createNewTask(task : TaskModel){
    this.tasks.push(task); // introducimos nueva tarea.

    this.tasksSubject.next(this.tasks); //Notificamos a los componentes que el arreglo cambio.
  }

  deleteTask(task: TaskModel){
    this.tasks = this.tasks.filter(e => e !== task);
    this.tasksSubject.next(this.tasks) // se notifica que el arreglo cambio.

  }


}
