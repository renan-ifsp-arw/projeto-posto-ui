import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';
import { BombaService } from '../bomba.service';
import { Bomba } from 'src/app/core/model';



@Component({
  selector: 'app-bomba-list',
  templateUrl: './bomba-list.component.html',
  styleUrls: ['./bomba-list.component.css']
})

export class BombaListComponent {
  header = "Posto-Ui-Bomba"

  bombas: Bomba[] = [];

  constructor(private bombaService: BombaService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    public auth: AuthService){ }

  ngOnInit(): void {
    this.title.setTitle('Listagem de Bombas');
    this.list();
  }

  list(): void {
    this.bombaService.listBombas().subscribe(
      (result: Bomba[]) => {
        console.log(result)
        this.bombas = result.sort((a, b) => b.id - a.id);
        console.log("bombas",this.bombas)
      },
      (error: any) => {
        // Trate o erro aqui, se necessário
        console.error('Erro ao obter bombas:', error);
      }
    );
  }

  confirmRemoval(bomba: Bomba): void {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.remove(bomba);
      }
    });
  }

  remove(bomba: Bomba): void {
    this.bombaService.remove(bomba.id)
    .then(() => {
      this.messageService.add({ severity: 'success', detail: 'Bomba excluída com sucesso!' });
    })
    .catch(error => this.errorHandler.handle(error));
  }


  calculateFillPercentage(bomba: Bomba): number {
    if (bomba.capacidade && bomba.quantidadeAtual) {
      return Math.ceil(bomba.quantidadeAtual / bomba.capacidade * 100);
    }
    return 0;
  }
}

