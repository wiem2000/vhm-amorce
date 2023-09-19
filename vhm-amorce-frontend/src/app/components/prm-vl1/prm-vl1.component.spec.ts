import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmVl1Component } from './prm-vl1.component';

describe('PrmVl1Component', () => {
  let component: PrmVl1Component;
  let fixture: ComponentFixture<PrmVl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmVl1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmVl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
