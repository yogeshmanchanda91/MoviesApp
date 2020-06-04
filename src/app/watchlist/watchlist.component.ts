import { Component, OnInit, OnDestroy } from '@angular/core';
import { WatchlistService } from './watchlist.service';
import { MoviesModel } from '../movies/movies.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit, OnDestroy {
  watchlistArray: MoviesModel[];
  private subscription: Subscription;
  startingMessage = true;

  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistArray = this.watchlistService.getWatchlist();
    this.subscription = this.watchlistService.watchlistChanged.subscribe(
      (watchlistArray: MoviesModel[]) => {
        this.watchlistArray = watchlistArray;
      }
    )
    if(this.watchlistArray.length>0){
      this.startingMessage = false;
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
