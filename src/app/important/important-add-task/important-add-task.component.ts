import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MydayService} from "../../myday/myday.service";
import {TaskModel} from "../../models/task.model";

@Component({
  selector: 'app-important-add-task',
  templateUrl: './important-add-task.component.html',
  styleUrls: ['./important-add-task.component.css']
})
export class ImportantAddTaskComponent {
  //Properties:
  taskForm: FormGroup;
  constructor(private myDayService: MydayService, private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      task: ''
    } as TaskModel);
  }
  ngOnInit(): void {}


  //Methods:
  resetForm(){
    this.taskForm.reset();
  }
  createTask(){
    this.myDayService.addNewImportantTask(this.taskForm.value.task);
    this.resetForm();
  }

}
