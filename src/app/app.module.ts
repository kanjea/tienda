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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    StoresComponent,
    StoreCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    /* ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
