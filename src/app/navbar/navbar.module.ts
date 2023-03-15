import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTasksComponent } from './search-tasks/search-tasks.component';
import { TaskMainComponent } from './task-main/task-main.component';
import { TaskIntroductionComponent } from './task-introduction/task-introduction.component';
import { TaskNewlistComponent } from './task-newlist/task-newlist.component';



@NgModule({
    declarations: [
        SearchTasksComponent,
        TaskMainComponent,
        TaskIntroductionComponent,
        TaskNewlistComponent
    ],
  exports: [
    SearchTasksComponent,
    TaskMainComponent,
    TaskIntroductionComponent,
    TaskNewlistComponent,
  ],
    imports: [
        CommonModule
    ]
})
export class NavbarModule { }
