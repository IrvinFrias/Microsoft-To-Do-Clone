import {Component, Input} from '@angular/core';
import {TaskModel} from "../../../models/task.model";
import {MydayService} from "../../myday.service";

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent {
  //Properties:
  @Input() task: TaskModel = {} as TaskModel;

  //Constructor:
  constructor(private mydayservice: MydayService) {
  }

  deleted: boolean = false;

  day: Date = new Date();
  formatDate: String = this.day.toLocaleDateString('es-ES',
    {weekday: 'long', year: 'numeric', month:'long', day:'numeric'});

  isImportant: boolean = true;


  //Methods:
  imprimir(){
    console.log(this.task);
  }
  toggleDeleteButton(){
    this.deleted = !this.deleted;
  }
  deleteTask(){
    this.mydayservice.deleteTask(this.task);
  }

  toggleIsImportant(): void{
    this.isImportant = !this.isImportant;
  }

  addImportantTask(): void{
    this.mydayservice.addNewImportantTask(this.task);
    console.log("Estoy en single task");
  }





}
