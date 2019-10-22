import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSelectModule,
  MatTableModule, 
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  
  
  
} from "@angular/material";
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
<<<<<<< HEAD
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule, MatNativeDateModule, ReactiveFormsModule, {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
=======
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule],
>>>>>>> 3a4c6a6ffad14c7fd7fb3dda74646420638356d4
  bootstrap: [AppComponent]
})
export class AppModule { }
