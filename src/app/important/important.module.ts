import {NgModule} from "@angular/core";
import {ImportantComponent} from "./important.component";
import { ImportantTableComponent } from './important-table/important-table.component';
import { ImportantTaskComponent } from './important-table/important-task/important-task.component';
import {MydayModule} from "../myday/myday.module";
import {CommonModule} from "@angular/common";
import { ImportantAddTaskComponent } from './important-add-task/important-add-task.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations:[ImportantComponent, ImportantTableComponent, ImportantTaskComponent, ImportantAddTaskComponent],
  imports: [MydayModule, CommonModule, ReactiveFormsModule],
})

export class ImportantModule{}
