import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { BombaListComponent } from './bomba-list/bomba-list.component';
import { BombaRegisterComponent } from './bomba-register/bomba-register.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    BombaListComponent,
    BombaRegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    DropdownModule,
    CurrencyMaskModule,
    TableModule
  ],
  exports:[
    BombaRegisterComponent
  ]
})
export class BombaModule { }
