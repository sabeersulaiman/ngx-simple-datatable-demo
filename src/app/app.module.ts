import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DataTableModule } from 'ngx-simple-datatable';
import { DataTableDemo1 } from './demo1/data-table-demo1';
import { DataTableDemo2 } from './demo2/data-table-demo2';
import { DataTableDemo3 } from './demo3/data-table-demo3';

@NgModule({
  declarations: [
    AppComponent,
    DataTableDemo1,
    DataTableDemo2,
    DataTableDemo3
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
