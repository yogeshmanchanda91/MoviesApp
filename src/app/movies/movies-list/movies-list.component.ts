import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MoviesModel } from '../movies.model';
import { MoviesService } from '../movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movies: MoviesModel[] = [];
  subscription: Subscription;

  constructor(private moviesService: MoviesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.moviesService.moviesChanged.subscribe(
      (movies: MoviesModel[]) => {
        this.movies = movies;
      }
    )
    this.movies = this.moviesService.getMovies();
  }

  onNewMovie(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
