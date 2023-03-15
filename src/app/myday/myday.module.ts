import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MydayComponent} from "./myday.component";
import { MydayTableComponent } from './myday-table/myday-table.component';
import { MydayAddTaskComponent } from './myday-add-task/myday-add-task.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SingleTaskComponent } from './myday-table/single-task/single-task.component';


@NgModule({
  declarations: [
    MydayComponent,
    MydayTableComponent,
    MydayAddTaskComponent,
    SingleTaskComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MydayModule { }
