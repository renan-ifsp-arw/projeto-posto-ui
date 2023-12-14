import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaConvenienciaRegisterComponent } from './venda-conveniencia-register.component';

describe('VendaConvenienciaRegisterComponent', () => {
  let component: VendaConvenienciaRegisterComponent;
  let fixture: ComponentFixture<VendaConvenienciaRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendaConvenienciaRegisterComponent]
    });
    fixture = TestBed.createComponent(VendaConvenienciaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
