import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { environment } from 'src/environments/environment';

import { appReducers } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers,
      {
        metaReducers: !environment.production ? [] : [],
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
