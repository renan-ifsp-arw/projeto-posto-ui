import { Component } from '@angular/core';
import { Fornecedor } from '../../core/model';
import { FornecedorService } from '../fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-fornecedor-register',
  templateUrl: './fornecedor-register.component.html',
  styleUrls: ['./fornecedor-register.component.css']
})
export class FornecedorRegisterComponent {
  fornecedor: Fornecedor = new Fornecedor();

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private fornecedorService: FornecedorService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fornecedorService.findById(Number(id)).then(data => this.fornecedor = data);
    }
  }

  saveFornecedor() {
    const operationPromise = this.fornecedor.id
      ? this.fornecedorService.update(this.fornecedor)
      : this.fornecedorService.addFornecedor(this.fornecedor);

    operationPromise.then(
      () => {
        this.router.navigate(['/fornecedor']);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Fornecedor salvo com sucesso!' });
      },
      error => {
        console.error('Error saving fornecedor:', error);
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar fornecedor' });
      }
    );
  }
}
