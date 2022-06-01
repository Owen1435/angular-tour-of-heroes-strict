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
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
