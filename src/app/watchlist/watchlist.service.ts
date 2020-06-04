import { Injectable } from '@angular/core';
import { MoviesModel } from '../movies/movies.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class WatchlistService {
  watchlistArray: MoviesModel[] = [];
  watchlistChanged = new Subject<MoviesModel[]>();
  index: number;
  watchlistNames: string[] = [];

  constructor(){}

  addToWatchlist(movie: MoviesModel){
    this.watchlistNames.push(movie.name)
    this.watchlistArray.push(movie);
    this.watchlistChanged.next(this.watchlistArray.slice());
    let selectedMovieName = movie.name;
    let test1 = this.watchlistNames.filter(item => item === selectedMovieName);
    if(test1.length > 1) {
      alert("This movie is already added in watchlist")
      this.onDelete(this.index);
    }
  }

  getWatchlist(){
    return this.watchlistArray.slice();
  }

  onDelete(index: number){
    this.watchlistArray.splice(index, 1);
    this.watchlistChanged.next(this.watchlistArray.slice());
  }

  updateWatchlist(index: number, newMovieDetails: MoviesModel){
    this.watchlistArray[index] = newMovieDetails;
    this.watchlistChanged.next(this.watchlistArray.slice());
  }
}
