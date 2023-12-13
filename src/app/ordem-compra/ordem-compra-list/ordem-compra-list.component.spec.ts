import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCompraListComponent } from './ordem-compra-list.component';

describe('OrdemCompraListComponent', () => {
  let component: OrdemCompraListComponent;
  let fixture: ComponentFixture<OrdemCompraListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemCompraListComponent]
    });
    fixture = TestBed.createComponent(OrdemCompraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
