import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmTp1Component } from './prm-tp1.component';

describe('PrmTp1Component', () => {
  let component: PrmTp1Component;
  let fixture: ComponentFixture<PrmTp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmTp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmTp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
