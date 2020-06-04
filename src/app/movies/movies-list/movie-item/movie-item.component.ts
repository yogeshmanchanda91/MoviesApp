import { Component, OnInit, Input } from '@angular/core';
import { MoviesModel } from '../../movies.model';
import { MoviesService } from '../../movies.service';
import {faStar, faVideo} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: MoviesModel;
  @Input() index: number;
  faStar = faStar;
  faVideo = faVideo;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

 addToWatchlist(){
   this.moviesService.addToWatchlist(this.index);
 }


}
