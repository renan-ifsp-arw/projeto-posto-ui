import { CoreModule } from './core/core.module';
import { SecurityModule } from './security/security.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './security/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './cliente/clientes.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { BombaModule } from './bomba/bomba.module';
import { VendaConvenienciaRegisterComponent } from './venda-conveniencia/venda-conveniencia-register/venda-conveniencia-register.component';
import { VendaConvenienciaListComponent } from './venda-conveniencia/venda-conveniencia-list/venda-conveniencia-list.component';
import { AbastecimentoListComponent } from './abastecimento/abastecimento-list/abastecimento-list.component';
import { AbastecimentoRegisterComponent } from './abastecimento/abastecimento-register/abastecimento-register.component';
import { OrdemCompraRegisterComponent } from './ordem-compra/ordem-compra-register/ordem-compra-register.component';
import { OrdemCompraListComponent } from './ordem-compra/ordem-compra-list/ordem-compra-list.component';


@NgModule({
  declarations: [
    AppComponent,
    VendaConvenienciaRegisterComponent,
    VendaConvenienciaListComponent,
    AbastecimentoListComponent,
    AbastecimentoRegisterComponent,
    OrdemCompraRegisterComponent,
    OrdemCompraListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    SecurityModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UsersModule
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
