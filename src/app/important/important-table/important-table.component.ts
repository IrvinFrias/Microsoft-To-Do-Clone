import {Component, OnInit} from '@angular/core';
import { TaskModel} from "../../models/task.model";
import {MydayService} from "../../myday/myday.service";

@Component({
  selector: 'app-important-table',
  templateUrl: './important-table.component.html',
  styleUrls: ['./important-table.component.css']
})
export class ImportantTableComponent implements OnInit{
  importantTask: TaskModel[] = [];
  constructor(private myDayService: MydayService) {}

  ngOnInit() {
    this.getImportantTask()
  }

  getImportantTask(): void{
    this.myDayService.getImportantTask().subscribe((importanTasks) =>
    this.importantTask = importanTasks)
  }


}
