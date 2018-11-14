import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetalleComponent } from './hotel-detalle.component';

describe('HotelDetalleComponent', () => {
  let component: HotelDetalleComponent;
  let fixture: ComponentFixture<HotelDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
