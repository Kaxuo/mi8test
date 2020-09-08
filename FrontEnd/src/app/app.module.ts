import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BoxComponent } from './components/box/box.component';
import { MatListModule } from '@angular/material/list'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AddComponent } from './components/add/add.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PagenotfoundComponent } from './components/errors/pagenotfound/pagenotfound.component';
import { ServerdownComponent } from './components/errors/serverdown/serverdown.component';
import { IdnotfoundComponent } from './components/errors/idnotfound/idnotfound.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from "ngx-spinner";










@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    AddComponent,
    EditDataComponent,
    PagenotfoundComponent,
    ServerdownComponent,
    IdnotfoundComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
