import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';
import { OrdemCompraService } from '../ordem-compra.service';
import { OrdemCompra } from 'src/app/core/model';

@Component({
  selector: 'app-ordem-compra-list',
  templateUrl: './ordem-compra-list.component.html',
  styleUrls: ['./ordem-compra-list.component.css']
})
export class OrdemCompraListComponent implements OnInit {
  ordensCompra: OrdemCompra[] = [];

  constructor(
    private ordemCompraService: OrdemCompraService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private titleService: Title,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Listagem de Ordens de Compra');
    this.listAll();
  }

  listAll(): void {
    this.ordemCompraService.listAll()
      .then(data => {
        this.ordensCompra = data;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  confirmRemoval(ordem: OrdemCompra): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir esta ordem de compra?',
      accept: () => {
        this.remove(ordem.id);
      }
    });
  }

  remove(id: number): void {
    this.ordemCompraService.remove(id)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Ordem de compra excluída com sucesso!' });
        this.listAll(); // Refresh the list after deletion
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
