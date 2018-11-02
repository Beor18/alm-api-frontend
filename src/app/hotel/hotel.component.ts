import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotels } from './hotel';
import {HotelService } from '../servicios/hotel.service';


@Component({
  selector: 'app-producto',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent implements OnInit {
  hotels: any;
  productoData = { name: '', stars: ['1', '2', '3', '4']};
  data: any;
  _id: '';
  message = 'Ups hubo un error!';

  constructor(private hotelService: HotelService) {
  }

  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.hotelService.getHoteles().subscribe(data => this.hotels = data['hotels']);
  }

  delete(hotel: Hotels) {
    this.hotels = this.hotels.filter(h => h !== hotel);
    this.hotelService.deleteHero(hotel).subscribe(result => {
      console.log(result);
    }, error => console.log('Borrado con exito: ', error.status)
  );
  }
}

