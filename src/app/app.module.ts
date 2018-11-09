import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { HotelFiltroPipe } from './hotel/hotelFiltro.pipe';
import {HotelService } from './servicios/hotel.service';
import { AmHeaderComponent } from './am-header/am-header.component';
const appRoutes: Routes = [
  {
    path: 'hoteles',
    component: HotelComponent,
    data: { title: 'Lista de Hoteles' }
  },
  { path: '',
    redirectTo: '/hoteles',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelFiltroPipe,
    AmHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})

export class AppModule { }
