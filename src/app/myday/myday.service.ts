import { Injectable } from '@angular/core';
import {TaskModel} from "../models/task.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MydayService {
  constructor() { }
  //Array of tasks:
  private tasks: TaskModel[] = [];
  private tasksSubject = new BehaviorSubject<TaskModel[]>(this.tasks);

  //Array of important task:
  private importantTask: TaskModel[] = [];
  private importantTaskSubject = new BehaviorSubject<TaskModel[]>(this.importantTask);

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

  getImportantTask(): Observable<TaskModel[]>{
    return this.importantTaskSubject.asObservable();
  }

  addNewImportantTask(importantTask: TaskModel){
    console.log("Estoy en el servicio");
    this.importantTask.push(importantTask);
    this.importantTaskSubject.next(this.importantTask);
    console.log(this.importantTask);

  }
  deleteImportantTask(importantTask: TaskModel){
    this.importantTask = this.importantTask.filter(e => e !== importantTask);
    this.importantTaskSubject.next(this.importantTask);

    this.tasks = this.tasks.filter(e => e !== importantTask);
    this.tasksSubject.next(this.tasks);
  }



}
