import {Component, OnInit} from '@angular/core';
import {MydayService} from "../myday.service";
import {TaskModel} from "../../models/task.model";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-myday-add-task',
  templateUrl: './myday-add-task.component.html',
  styleUrls: ['./myday-add-task.component.css']
})
export class MydayAddTaskComponent implements OnInit {
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
    this.myDayService.createNewTask(this.taskForm.value.task);
    console.log( typeof this.taskForm.value);
    this.resetForm();
  }


}
