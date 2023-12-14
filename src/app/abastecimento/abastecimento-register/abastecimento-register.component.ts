import { Component } from '@angular/core';
import {Abastecimento} from "../../core/model";

@Component({
  selector: 'app-abastecimento-register',
  templateUrl: './abastecimento-register.component.html',
  styleUrls: ['./abastecimento-register.component.css']
})

export class AbastecimentoRegisterComponent {
  abastecimento: Abastecimento = new Abastecimento();
  bombas = []; // Initialize with the appropriate data
  clientes = []; // Initialize with the appropriate data
  constructor() { }

  addAbastecimento() {
    console.log(this.abastecimento);
  }
}
