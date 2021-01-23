import { Component, OnInit } from '@angular/core';
import { WookieMoviesService } from '../../logic/services/wookie-movies.service';
import { WookieMovie } from '../../logic/models/wookie-movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieList: WookieMovie[] = [];
  movieDetail: WookieMovie = {};

  constructor(private WookieMoviesService:WookieMoviesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.WookieMoviesService.getMovies().subscribe((response) => {
      this.movieList = response.movies;
      const movieId = this.route.snapshot.params.id;
      this.movieDetail = this.movieList.filter((e) => e.id === movieId)[0];
      console.log(this.movieDetail)
    });
  }

}
