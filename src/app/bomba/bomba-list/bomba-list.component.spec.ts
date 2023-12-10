import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombaListComponent } from './bomba-list.component';

describe('BombaListComponent', () => {
  let component: BombaListComponent;
  let fixture: ComponentFixture<BombaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BombaListComponent]
    });
    fixture = TestBed.createComponent(BombaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
