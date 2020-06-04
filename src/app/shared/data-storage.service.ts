import { Injectable } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { HttpClient } from '@angular/common/http';
import { MoviesModel } from '../movies/movies.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  constructor(private moviesService: MoviesService,
              private http: HttpClient){}

  setMovies(){
    const movies = this.moviesService.getMovies();
    this.http.put('https://movies-app-23207.firebaseio.com/movies.json', movies).subscribe(
      (response) => console.log(response)
    )
  }

  fetchMovies(){
    return this.http.get<MoviesModel[]>('https://movies-app-23207.firebaseio.com/movies.json').pipe(tap
      ((movies)=> {
      this.moviesService.setMovies(movies);
      })
    )
  }
}
