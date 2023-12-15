import { Component } from '@angular/core';
import {Abastecimento, Bomba, Cliente} from "../../core/model";
import {BombaService} from "../../bomba/bomba.service";
import {ClienteService} from "../../cliente/cliente.service";
import {AbastecimentoService} from "../abastecimento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-abastecimento-register',
  templateUrl: './abastecimento-register.component.html',
  styleUrls: ['./abastecimento-register.component.css']
})

export class AbastecimentoRegisterComponent {
  abastecimento: Abastecimento = new Abastecimento();
  bombas: Bomba[] = []; // Initialize with the appropriate data
  clientes: Cliente[] = []; // Initialize with the appropriate data

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private bombaService: BombaService,
    private clienteService: ClienteService,
    private abastecimentoService: AbastecimentoService
  ) { }

  ngOnInit(): void {
    this.loadBombas();
    this.loadClientes();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.abastecimentoService.findById(Number(id)).then(abastecimento => this.abastecimento = abastecimento)
    }
  }

  addAbastecimento() {
    this.abastecimentoService.addAbastecimento(this.abastecimento)
  }

  saveAbastecimento() {
    const operationPromise = this.abastecimento.id
      ? this.abastecimentoService.update(this.abastecimento)
      : this.abastecimentoService.addAbastecimento(this.abastecimento);

    operationPromise.then(
      () => {
        this.router.navigate(['/abastecimento']);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Abastecimento salvo com sucesso!' });
      },
      error => {
        console.error('Error saving abastecimento:', error);
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: error.error.message });
      }
    );
  }



  private loadClientes() {
    this.clienteService.listClientes()
      .subscribe(clientes => this.clientes = clientes);
  }

  loadBombas(): void {
    this.bombaService.listBombas().subscribe(
      bombas => {
        this.bombas = bombas.map(bomba => ({
          ...bomba,
          label: 'Bomba: ' + bomba.id + ' - ' + bomba.combustivel
        }));
      },
      error => {
        console.error('Error loading bombas', error);
      }
    );
  }
}
