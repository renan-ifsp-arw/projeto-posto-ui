import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemCompraRegisterComponent } from './ordem-compra-register/ordem-compra-register.component';
import { OrdemCompraListComponent } from './ordem-compra-list/ordem-compra-list.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {DropdownModule} from "primeng/dropdown";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [
    OrdemCompraRegisterComponent,
    OrdemCompraListComponent
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
export class OrdemCompraModule { }
