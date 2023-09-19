import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmTg1Component } from './prm-tg1.component';

describe('PrmTg1Component', () => {
  let component: PrmTg1Component;
  let fixture: ComponentFixture<PrmTg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmTg1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmTg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
