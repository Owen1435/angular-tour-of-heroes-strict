import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroesModule } from './modules/heroes/heroes.module';
import { MessagesComponent } from './components/messages/messages.component';
import {CrisisCenterModule} from "./modules/crisis-center/crisis-center.module";
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import {AdminModule} from "./modules/admin/admin.module";
import {AuthModule} from "./modules/auth/auth.module";

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MessagesComponent,
    ComposeMessageComponent,
  ],
  imports: [
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {dataEncapsulation: false}
    ),
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
