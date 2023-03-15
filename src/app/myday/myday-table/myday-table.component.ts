import {Component, OnInit, Input} from '@angular/core';
import {MydayService} from "../myday.service";
import {TaskModel} from "../../models/task.model";

@Component({
  selector: 'app-myday-table',
  templateUrl: './myday-table.component.html',
  styleUrls: ['./myday-table.component.css']
})
export class MydayTableComponent implements OnInit{
  //Properties:
  tasks: TaskModel[] = [];

  constructor(private myDayService: MydayService) {}

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.tasks = this.myDayService.tasks;
  }
  imprimir(){
    console.log('hola');
  }

}
