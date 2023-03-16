import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NavbarModule} from "./navbar/navbar.module";
import {MydayModule} from "./myday/myday.module";
import {AppRoutingModule} from "./app-routing.module";
import {ImportantModule} from "./important/important.module";

import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NavbarModule,
    MydayModule,
    AppRoutingModule,
    ImportantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
