import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotels } from './hotel';
import {HotelService } from '../servicios/hotel.service';


@Component({
  selector: 'app-producto',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent implements OnInit {
  hotels: any;
  // tslint:disable-next-line:max-line-length
  options = [ {name:'5', value:5, checked:false}, {name:'4', value:4, checked:false}, {name:'3', value:3, checked:false}, {name:'2', value:2, checked:false}, {name:'1', value:1, checked:false} ];
  starsQuery = [];
  _id: '';
  message = 'Ups hubo un error!';

  constructor(private hotelService: HotelService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getHotels();
    this.route.params.subscribe( params => this._id = params._id );
  }

  getHotels() {
    this.hotelService.getHoteles().subscribe(hotels => this.hotels = hotels['hotels']);
  }

  intToArray ( stars: number ) {
    return new Array(stars);
  }

  setHotelStars ( stars: number, checked: boolean ) {
    if (checked) {
      this.starsQuery.push(stars);
    } else {
      this.starsQuery.splice(this.starsQuery.indexOf([stars]), 1);
    }
    this.hotelService.getHotelesPorStars(this.starsQuery).subscribe(star => {
      this.starsQuery = star;
      console.log(this.starsQuery);
    });
  }

  delete(hotel: Hotels) {
    this.hotels = this.hotels.filter(h => h !== hotel);
    this.hotelService.deleteHero(hotel).subscribe(result => {
      console.log(result);
    }, error => console.log('Borrado con exito: ', error.status)
  );
  }
}

