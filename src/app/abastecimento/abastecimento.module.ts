import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbastecimentoRegisterComponent } from './abastecimento-register/abastecimento-register.component';
import { AbastecimentoListComponent } from './abastecimento-list/abastecimento-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {BrowserModule} from "@angular/platform-browser";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {CurrencyMaskModule} from "ng2-currency-mask";



@NgModule({
  declarations: [
    AbastecimentoRegisterComponent,
    AbastecimentoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    CurrencyMaskModule
  ]
})
export class AbastecimentoModule { }
