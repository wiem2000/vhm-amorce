import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmSbClss1Component } from './prm-sb-clss1.component';

describe('PrmSbClss1Component', () => {
  let component: PrmSbClss1Component;
  let fixture: ComponentFixture<PrmSbClss1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrmSbClss1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrmSbClss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
