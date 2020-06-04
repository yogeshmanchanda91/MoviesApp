import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieItemComponent } from './movies/movies-list/movie-item/movie-item.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { SharedComponent } from './shared/shared.component';
import { AppRoutingModule } from './app.routing.module';
import { MoviesStartComponent } from './movies/movies-start/movies-start.component';
import { WatchlistNewComponent } from './watchlist/watchlist-new/watchlist-new.component';
import { AlertComponent } from './shared/alert/alert.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    WatchlistComponent,
    WatchlistNewComponent,
    MoviesListComponent,
    MovieItemComponent,
    MovieEditComponent,
    MoviesStartComponent,
    MovieDetailComponent,
    SharedComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FontAwesomeModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
