import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotels } from '../hotel/hotel';
import {HotelService } from '../servicios/hotel.service';

@Component({
  selector: 'app-hotel-detalle',
  templateUrl: './hotel-detalle.component.html',
  styleUrls: ['../hotel/hotel.component.css']
})
export class HotelDetalleComponent implements OnInit {

  hotels: any;
  _id: '';

  constructor(private hotelService: HotelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.hotelService.getHotelDetalle(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.hotels = data;
    });
  }

  intToArray ( stars: number ) {
    return new Array(stars);
  }

}

