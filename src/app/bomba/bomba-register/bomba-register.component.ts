import { Bomba } from './../../core/model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BombaService } from './../bomba.service';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/security/auth.service';
import { ErrorHandlerService } from './../../core/error-handler.service';


@Component({
  selector: 'app-bomba-register',
  templateUrl: './bomba-register.component.html',
  styleUrls: ['./bomba-register.component.css']
})

export class BombaRegisterComponent {
  
  types = [
    { label: 'GASOLINA_COMUM', value: 'GASOLINA_COMUM' },
    { label: 'GASOLINA_ADITIVADA', value: 'GASOLINA_ADITIVADA' },
    { label: 'GASOLINA_PREMIUM', value: 'GASOLINA_PREMIUM'},
    { label: 'ETANOL', value: 'ETANOL'},
    { label: 'DIESEL', value: 'DIESEL'},
    { label: 'GNV', value: 'GNV' }
  ];

  bomba = new Bomba();

  constructor(
    private bombaService: BombaService,        
    private messageService: MessageService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService
  ){}
  
  addBomba() {
    this.bombaService.criarBomba(this.bomba).subscribe(
      (resposta: any) => {
        console.log('Bomba cadastrada com sucesso!', resposta);
      },
      (erro: any) => {
        console.error('Erro ao cadastrar bomba:', erro);
      }
    );
  }
}
