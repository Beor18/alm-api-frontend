import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-producto',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotels: any;
  productoData = { name: '', stars: [{ id: 1, name: '1'}, { id: 2, name: '2'}, { id: 3, name: '3'}, { id: 4, name: '4'}]};
  data: any;
  message = 'Ups hubo un error!';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(`http://localhost:5000/api/hoteles`).subscribe(data => {
      this.hotels = data['hotels'];
      console.log(this.hotels);
    }, err => {
      if (err.status === 401) {
        this.router.navigate(['login']);
      }
    });
  }

  producto() {
    this.http.post(`http://localhost:5000/api/hotel/agregar`, this.productoData).subscribe(resp => {
      this.data = resp;
      this.router.navigate(['/hoteles']);
    }, err => {
      this.message = err.error.msg;
    });
  }

}
