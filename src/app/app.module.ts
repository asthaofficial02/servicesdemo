import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
