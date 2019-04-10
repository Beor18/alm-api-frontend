import { Injectable} from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { Hotels } from '../hotel/hotel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const URL_BASE = 'http://almundo-examen.herokuapp.com/api';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotels: any;
  _id: '';
  stars: '';
  message = 'Ups hubo un error!';

  constructor(private http: HttpClient, private router: Router) { }

  getHoteles (): Observable<Hotels[]> {
    return this.http.get<Hotels[]>(URL_BASE + `/hoteles`).pipe(
      catchError(this.handleError('getHoteles', []))
    );
  }

  getHotelesPorStars(stars): Observable<Hotels[]> {
    return this.http.get<Hotels[]>(URL_BASE + '/stars/' + stars).pipe(
      catchError(this.handleError<any>('getHotelesPorStars'))
    );
  }

  getHotelDetalle(_id: number): Observable<Hotels> {
    const url = URL_BASE + '/hoteles/' + _id;
    return this.http.get<Hotels>(url).pipe(
      catchError(this.handleError<Hotels>(`getHotelDetalle id=${_id}`))
    );
  }

  deleteHero (hotel: Hotels | string): Observable<Hotels> {
    const id = typeof hotel === 'string' ? hotel : hotel._id;
    const url = URL_BASE + `/hoteles/${id}`;
    return this.http.delete<Hotels>(url, httpOptions ).pipe(
      catchError(this.handleError<Hotels>('deleteHero'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
