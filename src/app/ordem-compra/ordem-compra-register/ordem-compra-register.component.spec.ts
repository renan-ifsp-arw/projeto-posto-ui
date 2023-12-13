import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCompraRegisterComponent } from './ordem-compra-register.component';

describe('OrdemCompraRegisterComponent', () => {
  let component: OrdemCompraRegisterComponent;
  let fixture: ComponentFixture<OrdemCompraRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemCompraRegisterComponent]
    });
    fixture = TestBed.createComponent(OrdemCompraRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
