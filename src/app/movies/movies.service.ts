import { Injectable } from "@angular/core";
import { MoviesModel } from './movies.model';
import { Subject } from 'rxjs';
import { WatchlistService } from '../watchlist/watchlist.service';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  moviesChanged = new Subject<MoviesModel[]>();
  constructor(private watchlistService: WatchlistService){}

  private movies: MoviesModel[] = [];
  // private movies: MoviesModel[] = [
  //   new MoviesModel(
  //     'The Shawshank Redemption',
  //     'https://tvguide1.cbsistatic.com/feed/1/567/12198567.jpg',
  //     'Drama',
  //     9.3,
  //     {releaseYear: 1994, actors: ' Tim Robbins, Morgan Freeman, Bob Gunton', plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'}
  //   ),
  //   new MoviesModel(
  //     'The Dark Knight',
  //     'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  //     'Action',
  //     9.0,
  //     {releaseYear: 2008, actors: 'Christian Bale, Heath Ledger, Aaron Eckhart', plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'}
  //   ),
  //   new MoviesModel(
  //     'Avengers: Infinity War',
  //     'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
  //     'Action',
  //     8.5,
  //     {releaseYear: 2018, actors: 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo', plot: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'}
  //   )
  // ]

  getMovies(){
    return this.movies.slice();
  }

  getMovie(index: number){
    return this.movies[index];
  }

  setMovies(movies: MoviesModel[]){
    this.movies = movies;
    this.moviesChanged.next(this.movies.slice());
  }

  addMovie(movie: MoviesModel){
    this.movies.push(movie);
    this.moviesChanged.next(this.movies.slice());
  }

  deleteMovie(index: number){
    this.movies.splice(index, 1);
    this.moviesChanged.next(this.movies.slice());
  }

  updateMovie(index: number, updatedMovie: MoviesModel){
    this.movies[index] = updatedMovie;
    this.moviesChanged.next(this.movies.slice());
  }

  addToWatchlist(index: number){
    this.watchlistService.addToWatchlist(this.movies[index]);
  }
}
