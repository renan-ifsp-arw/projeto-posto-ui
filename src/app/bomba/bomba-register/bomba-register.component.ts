import { Bomba } from 'src/app/core/model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BombaService } from './../bomba.service';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/security/auth.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, LazyLoadEvent} from 'primeng/api';


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
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private confirmation: ConfirmationService,
  ){}

  ngOnInit(): void {
    const bombaId = this.route.snapshot.params['id'];
    if (bombaId) {
      this.loadBomba(bombaId);
    }
  }

  loadBomba(id: number) {
    this.bombaService.recoverBombId(id)
      .then(bomba => {
        this.bomba = bomba;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  addBomba() {
    const bombaId = this.bomba.id;
    
    if(bombaId != null){
      this.bombaService.updateBomba(this.bomba)
      .subscribe(
        response => {
          this.bomba = response;
          this.messageService.add({ severity: 'success', detail: 'Bomba editada com sucesso!' });
        },
        error => this.errorHandler.handle(error)
      );

    }else{
      this.bombaService.criarBomba(this.bomba).subscribe(
        (resposta: any) => {
          this.messageService.add({ severity: 'success', detail: 'Bomba cadastrada com sucesso!' });
        },
        (erro: any) => {
          console.error('Erro ao cadastrar bomba:', erro);
        }
      );
    }
  }


}
