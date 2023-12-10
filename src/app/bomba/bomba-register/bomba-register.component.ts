import { Bomba } from './../../core/model';
import { Component } from '@angular/core';

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
}
