import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { MoviesComponent } from './movies/movies.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MoviesStartComponent } from './movies/movies-start/movies-start.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesResolverService } from './movies/movies.resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent, children: [
    { path: '', component: MoviesStartComponent },
    { path: 'new', component: MovieEditComponent },
    { path: ':id', component: MovieDetailComponent, resolve: [MoviesResolverService] },
    { path: ':id/edit', component: MovieEditComponent, resolve: [MoviesResolverService] },
  ] },
  { path: 'watchlist', component: WatchlistComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
