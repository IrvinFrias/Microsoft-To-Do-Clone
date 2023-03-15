import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NavbarModule} from "./navbar/navbar.module";
import {RouterModule} from "@angular/router";
import {MydayComponent} from "./myday/myday.component";
import {MydayModule} from "./myday/myday.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NavbarModule,
    MydayModule,
    RouterModule.forRoot(
      [
        {path: '', component: MydayComponent}
      ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
