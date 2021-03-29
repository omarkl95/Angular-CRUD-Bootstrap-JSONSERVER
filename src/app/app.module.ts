import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AddEditTasksComponent } from './pages/main/add-edit-tasks/add-edit-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddEditTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    [ModalModule.forRoot()],
    FormsModule
  ],
  entryComponents:[    AddEditTasksComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
