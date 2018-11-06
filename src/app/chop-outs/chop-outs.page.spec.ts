import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChopOutsPage } from './chop-outs.page';

describe('ChopOutsPage', () => {
  let component: ChopOutsPage;
  let fixture: ComponentFixture<ChopOutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChopOutsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChopOutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
