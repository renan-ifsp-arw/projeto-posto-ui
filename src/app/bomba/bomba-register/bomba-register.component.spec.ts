import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombaRegisterComponent } from './bomba-register.component';

describe('BombaRegisterComponent', () => {
  let component: BombaRegisterComponent;
  let fixture: ComponentFixture<BombaRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BombaRegisterComponent]
    });
    fixture = TestBed.createComponent(BombaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
