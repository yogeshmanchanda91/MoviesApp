import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { MoviesService } from './movies.service';
import { MoviesModel } from './movies.model';


@Injectable({
  providedIn: "root"
})
export class MoviesResolverService implements Resolve<MoviesModel[]>{

  constructor(private dataStorageService: DataStorageService,
              private moviesService: MoviesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const movies = this.moviesService.getMovies();

    if(movies.length === 0){
      return this.dataStorageService.fetchMovies();
    } else {
      return movies;
    }
  }
}
