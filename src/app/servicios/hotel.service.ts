import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Hotels } from '../hotel/hotel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotels: any;
  productoData = { name: '', stars: ['1', '2', '3', '4']};
  _id: '';
  message = 'Ups hubo un error!';

  constructor(private http: HttpClient, private router: Router) { }

  getHoteles (): Observable<Hotels[]> {
    return this.http.get<Hotels[]>(`http://localhost:5000/api/hoteles`);
  }

  deleteHero (hotel: Hotels | string): Observable<Hotels> {
    const id = typeof hotel === 'string' ? hotel : hotel._id;
    const url = `http://localhost:5000/api/hotel/delete/${id}`;
    return this.http.delete<Hotels>(url, httpOptions);
  }
}
