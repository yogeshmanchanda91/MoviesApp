import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MoviesModel } from '../movies.model';
import { MoviesService } from '../movies.service';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { DataStorageService } from 'src/app/shared/data-storage.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {
  movie: MoviesModel;
  id: number;
  confirmSaving = false;
  faStar = faStar;

  constructor(private moviesService: MoviesService,
              private dataStorageService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.movie = this.moviesService.getMovie(this.id);
      }
      );
  }

  onDelete(){
    this.confirmSaving = true;
    // this.moviesService.deleteMovie(this.id);
    // this.router.navigate(['/movies']);
    // this.dataStorageService.setMovies();
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onConfirmSave(){
    this.confirmSaving = false;
    this.moviesService.deleteMovie(this.id);
    this.dataStorageService.setMovies();
    this.router.navigate(['/movies']);
  }

  onCancelSaving(){
    this.confirmSaving = false;
  }
}
