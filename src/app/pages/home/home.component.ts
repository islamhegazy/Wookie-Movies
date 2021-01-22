import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WookieMovie } from '../../logic/models/wookie-movie.model';
import { WookieMoviesService } from '../../logic/services/wookie-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  movieList: WookieMovie[] = [];
  genreList: string[] = [];

  getMoviesSub:Subscription = new Subscription();
  constructor(private wookieService: WookieMoviesService) {}

  ngOnInit(): void {
   this.getMoviesSub = this.wookieService.getMovies().subscribe((response:any) => {
     this.genreList = this.getAllGenres(response.movies);
      this.movieList = response.movies;
    });

  
  }

  getAllGenres(movieList:[]) {
    let genreList:any = [];
    movieList.forEach((movie:any) => {
      genreList = genreList.concat(movie.genres);
      genreList = genreList.filter((item:any, index:any) => genreList.indexOf(item) === index)
    });
    return genreList;
  }

  ngOnDestroy(): void {
    if(this.getMoviesSub) this.getMoviesSub.unsubscribe();
  }
}
