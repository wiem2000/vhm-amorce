import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmClss1Component } from './prm-clss1.component';

describe('PrmClss1Component', () => {
  let component: PrmClss1Component;
  let fixture: ComponentFixture<PrmClss1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmClss1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmClss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
