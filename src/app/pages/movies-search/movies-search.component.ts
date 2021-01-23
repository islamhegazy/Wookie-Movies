import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WookieMovie } from '../../logic/models/wookie-movie.model';
import { WookieMoviesService } from '../../logic/services/wookie-movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit, OnDestroy {

  movieList: WookieMovie[] = [];

  searchValueSub:Subscription = new Subscription();
  constructor(private wookieService: WookieMoviesService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.wookieService
        .searchMovie(params['searchTxt'])
        .subscribe((response) => {
          this.movieList = response.movies;
        });
    });
  }

  
  ngOnDestroy(): void {
    if(this.searchValueSub) this.searchValueSub.unsubscribe();
  }
}
