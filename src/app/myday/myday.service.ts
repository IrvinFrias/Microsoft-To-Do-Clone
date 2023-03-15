import { Injectable } from '@angular/core';
import {TaskModel} from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class MydayService {
  constructor() { }
  //Array of tasks:
  tasks: TaskModel[] = [];

  //Methods:

  createNewTask(task : TaskModel){
    this.tasks.push(task);
  }
}
