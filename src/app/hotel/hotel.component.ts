import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Hotels } from './hotel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

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

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.getHoteles();
  }

  getHoteles() {
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

  deleteHero (hotel: Hotels | string): Observable<Hotels> {
    const id = typeof hotel === 'string' ? hotel : hotel._id;
    const url = `http://localhost:5000/api/hotel/delete/${id}`;
    return this.http.delete<Hotels>(url, httpOptions);
  }

  delete(hotel: Hotels) {
    this.hotels = this.hotels.filter(h => h !== hotel);
    this.deleteHero(hotel).subscribe(result => {
      console.log(result);
    }, error => console.log('Borrado con exito: ', error.status)
  );
  }
}

