import {Component, Input} from '@angular/core';
import {TaskModel} from "../../../models/task.model";

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent {
  //Properties:
  @Input() task: TaskModel = {} as TaskModel;

  day: Date = new Date();
  formatDate: String = this.day.toLocaleDateString('es-ES',
    {weekday: 'long', year: 'numeric', month:'long', day:'numeric'});


  //Methods:
  imprimir(){
    console.log(this.task);
  }

}
