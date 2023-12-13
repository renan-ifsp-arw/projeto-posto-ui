import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendaConvenienciaListComponent } from './venda-conveniencia-list/venda-conveniencia-list.component';
import { VendaConvenienciaRegisterComponent } from './venda-conveniencia-register/venda-conveniencia-register.component';



@NgModule({
  declarations: [
    VendaConvenienciaListComponent,
    VendaConvenienciaRegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VendaConvenienciaModule { }
