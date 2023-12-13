import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaConvenienciaListComponent } from './venda-conveniencia-list.component';

describe('VendaConvenienciaListComponent', () => {
  let component: VendaConvenienciaListComponent;
  let fixture: ComponentFixture<VendaConvenienciaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendaConvenienciaListComponent]
    });
    fixture = TestBed.createComponent(VendaConvenienciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
