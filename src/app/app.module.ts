import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { StoresComponent } from './main/stores/stores.component';
import { StoreCardComponent } from './main/stores/store-card/store-card.component';
import { BalanceComponent } from './main/balance/balance.component';


import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    StoresComponent,
    StoreCardComponent,
    BalanceComponent,
    LandingComponent,

  ],
  imports: [
    Ng2GoogleChartsModule,
    BrowserModule,
    AppRoutingModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    /* ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
