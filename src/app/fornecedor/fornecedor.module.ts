import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {DropdownModule} from "primeng/dropdown";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {TableModule} from "primeng/table";
import {FornecedorRegisterComponent} from "./fornecedor-register/fornecedor-register.component";
import {FornecedorListComponent} from "./fornecedor-list/fornecedor-list.component";



@NgModule({
  declarations: [
    FornecedorRegisterComponent,
    FornecedorListComponent
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
  ]
})
export class FornecedorModule { }
