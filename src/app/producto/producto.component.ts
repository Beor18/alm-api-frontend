import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  hotels: any;
  page = 1;
  maximumPages = 2;
  productoData = { name: '', stars: '' };
  data: any;
  message = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(`http://localhost:5000/api/hoteles?page=${this.page}&perPage=9`).subscribe(data => {
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
      this.router.navigate(['/productos']);
    }, err => {
      this.message = err.error.msg;
    });
  }

}
