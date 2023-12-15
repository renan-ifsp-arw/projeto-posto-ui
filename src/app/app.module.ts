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
import {AbastecimentoModule} from "./abastecimento/abastecimento.module";
import {VendaConvenienciaModule} from "./venda-conveniencia/venda-conveniencia.module";
import {OrdemCompraModule} from "./ordem-compra/ordem-compra.module";
import { FornecedorRegisterComponent } from './fornecedor/fornecedor-register/fornecedor-register.component';
import { FornecedorListComponent } from './fornecedor/fornecedor-list/fornecedor-list.component';
import {FornecedorModule} from "./fornecedor/fornecedor.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    BombaModule,
    FuncionarioModule,
    AbastecimentoModule,
    VendaConvenienciaModule,
    OrdemCompraModule,
    FornecedorModule,
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
