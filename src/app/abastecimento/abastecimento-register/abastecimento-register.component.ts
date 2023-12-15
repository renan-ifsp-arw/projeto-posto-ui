import { Component } from '@angular/core';
import {Abastecimento, Bomba, Cliente} from "../../core/model";
import {BombaService} from "../../bomba/bomba.service";
import {ClienteService} from "../../cliente/cliente.service";
import {AbastecimentoService} from "../abastecimento.service";

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
    private bombaService: BombaService,
    private clienteService: ClienteService,
    private abastecimentoService: AbastecimentoService
  ) { }

  ngOnInit(): void {
    this.loadBombas();
    this.loadClientes();
  }

  addAbastecimento() {
    this.abastecimentoService.addAbastecimento(this.abastecimento)
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

  private loadClientes() {
    this.clienteService.listClientes()
      .subscribe(clientes => this.clientes = clientes);
  }
}
