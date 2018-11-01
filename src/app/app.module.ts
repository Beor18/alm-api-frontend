import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';

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
    HotelComponent
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
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
