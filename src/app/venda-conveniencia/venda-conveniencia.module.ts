import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendaConvenienciaListComponent } from './venda-conveniencia-list/venda-conveniencia-list.component';
import { VendaConvenienciaRegisterComponent } from './venda-conveniencia-register/venda-conveniencia-register.component';
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
    VendaConvenienciaListComponent,
    VendaConvenienciaRegisterComponent
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
export class VendaConvenienciaModule { }
