import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule} from'./app-routing.module';


import { UserComponent }      from './components/user/user.component';
import { AlbumComponent }      from './components/album/album.component';
import { PhotoComponent }      from './components/photo/photo.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule, MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AlbumComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule

  ],
  exports:[MatListModule,MatGridListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
