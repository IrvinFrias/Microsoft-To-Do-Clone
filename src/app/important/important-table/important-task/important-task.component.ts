import {Component, Input} from '@angular/core';
import {MydayService} from "../../../myday/myday.service";
import {TaskModel} from "../../../models/task.model";

@Component({
  selector: 'app-important-task',
  templateUrl: './important-task.component.html',
  styleUrls: ['./important-task.component.css']
})
export class ImportantTaskComponent {
  //Properties:
  @Input() importantTask: TaskModel = {} as TaskModel;
  constructor(private myDayService: MydayService) {}

  deleted: boolean = false;

  day: Date = new Date();
  formatDate: String = this.day.toLocaleDateString('es-ES',
    {weekday: 'long', year: 'numeric', month:'long', day:'numeric'});

  isImportant: boolean = true;


  //Methods:
  imprimir(){
    console.log(this.importantTask);
  }
  toggleDeleteButton(){
    this.deleted = !this.deleted;
  }
  deleteTask(){
    this.myDayService.deleteTask(this.importantTask);
  }

  toggleIsImportant(): void{
    this.isImportant = !this.isImportant;
  }



}
