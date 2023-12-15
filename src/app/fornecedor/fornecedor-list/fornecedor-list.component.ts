import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../core/model';
import { FornecedorService } from '../fornecedor.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent implements OnInit {
  fornecedores: Fornecedor[] = [];

  constructor(
    private fornecedorService: FornecedorService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private title: Title,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Listagem de Fornecedores');
    this.listAll();
  }

  listAll(): void {
    this.fornecedorService.listAll().then(
      data => this.fornecedores = data,
      error => console.error('Error fetching fornecedores:', error)
    );
  }

  confirmRemoval(fornecedor: Fornecedor): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este fornecedor?',
      accept: () => {
        this.fornecedorService.remove(fornecedor.id).then(
          () => {
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Fornecedor excluído com sucesso!'});
            this.listAll();
          },
          error => console.error('Error removing fornecedor:', error)
        );
      }
    });
  }
}
