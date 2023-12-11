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
    { label: 'Gasolina Comum', value: 'GASOLINA COMUM' },
    { label: 'Gasolina Aditivada', value: 'GASOLINA ADITIVADA' },
    { label: 'Gasolina Premium', value: ' GASOLINA PREMIUM'},
    { label: 'Etanol', value: 'ETANOL'},
    { label: 'Disiel', value: 'DISIEL'},
    { label: 'Gnv', value: 'GNV' }
  ];

  bomba = new Bomba();

  constructor(
    private bombaService:BombaService,        
    private messageService: MessageService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    ){}
  
  // save(bombaForm: NgForm){
  //     this.addBomba(bombaForm);
  //   }

  // addBomba(bombaForm: NgForm) {
  //   this.BombaService.add(this.bomba)
  //     .then((addedActivity) => {
  //       this.messageService.add({ severity: 'success', detail: 'Atividade adicionada com sucesso!' });
  //       this.loadActivity(addedActivity.id);
  //       this.router.navigate(['/activities', addedActivity.id]);
  //     })
  //     .catch(error => this.errorHandler.handle(error));
  // }
  
  }


