import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditChoresComponent } from './comp/edit-chores/edit-chores.component';
import { ViewChoresComponent } from './comp/view-chores/view-chores.component';
import { Err404Component } from './comp/err404/err404.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EditChoresComponent,
    ViewChoresComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
