import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WookieMovie } from '../../../logic/models/wookie-movie.model';
import { WookieMoviesService } from '../../../logic/services/wookie-movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

@Input ('movieInput') movie:WookieMovie = {};

  constructor() { }

  ngOnInit(): void {}
}
