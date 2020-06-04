import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormArray, FormGroup, FormControl } from '@angular/forms';

import { MoviesService } from '../movies.service';
import { MoviesModel } from '../movies.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  id: number;
  submitted = false;
  editMode = false;
  confirmSaving = false;
  editedMovie: MoviesModel;
  @ViewChild('f', { static: false }) movieForm: NgForm;

  constructor (private moviesService: MoviesService,
              private dataStorageService: DataStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  initForm(){
    if(this.editMode){
      this.editedMovie = this.moviesService.getMovie(this.id);
      setTimeout(()=>{
        this.movieForm.form.patchValue({
          name: this.editedMovie.name,
          genre: this.editedMovie.genre,
          imagePath: this.editedMovie.imagePath,
          rating: this.editedMovie.rating,
          descriptionGroup: {
            releaseYear: this.editedMovie.description.releaseYear,
            actors: this.editedMovie.description.actors,
            plot: this.editedMovie.description.plot
          }
        })
      })
    }
  }

  onSubmit(form: NgForm){
    this.submitted = true;
    const value = form.value;
    const newMovie: MoviesModel = new MoviesModel(value.name, value.imagePath, value.genre, value.rating, value.descriptionGroup);
    if(this.editMode){
      this.confirmSaving = true;
      this.moviesService.updateMovie(this.id, newMovie);
      // this.router.navigate(["../"], {relativeTo: this.route})
    } else {
      this.moviesService.addMovie(newMovie);
      this.dataStorageService.setMovies();
      this.router.navigate(["../"], {relativeTo: this.route})
    }
  }

  onCancel(){
    // this.editedMovie = this.moviesService.getMovie(this.id);
    // this.movieForm.reset();
    this.submitted = false;
    this.router.navigate(["../"], {relativeTo: this.route})
  }

  onConfirmSave(){
    this.dataStorageService.setMovies();
    this.confirmSaving = false;
    this.router.navigate(["../"], {relativeTo: this.route})
  }

  onCancelSaving(){
    this.editedMovie = this.moviesService.getMovie(this.id);
    this.confirmSaving = false;
  }
}
