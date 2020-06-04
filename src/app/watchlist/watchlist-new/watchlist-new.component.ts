import { Component, OnInit, Input } from '@angular/core';
import { faStar, faVideo } from '@fortawesome/free-solid-svg-icons';

import { WatchlistService } from '../watchlist.service';
import { MoviesModel } from 'src/app/movies/movies.model';

@Component({
  selector: 'app-watchlist-new',
  templateUrl: './watchlist-new.component.html',
  styleUrls: ['./watchlist-new.component.css']
})

export class WatchlistNewComponent implements OnInit {
  @Input() movie: MoviesModel;
  @Input() index: number;
  faStar = faStar;
  faVideo = faVideo;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.watchlistService.onDelete(this.index)
  }

}
