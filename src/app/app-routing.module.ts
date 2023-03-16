import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MydayComponent} from "./myday/myday.component";
import {ImportantComponent} from "./important/important.component";
import {TasksComponent} from "./tasks/tasks.component";

const routes: Routes = [
  {path: '', redirectTo: '/myday', pathMatch: 'full'},
  {path: 'myday', component:MydayComponent},
  {path: 'important', component:ImportantComponent},
  {path: 'tasks', component: TasksComponent}

]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
