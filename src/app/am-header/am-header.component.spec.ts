import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmHeaderComponent } from './am-header.component';

describe('AmHeaderComponent', () => {
  let component: AmHeaderComponent;
  let fixture: ComponentFixture<AmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
