import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Components/student/student.component';
import { TrainerComponent } from './Components/trainer/trainer.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { NurseComponent } from './Components/nurse/nurse.component';

@NgModule({
  declarations: [
    AppComponent, StudentComponent, TrainerComponent, EmployeeComponent, DoctorComponent, NurseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
