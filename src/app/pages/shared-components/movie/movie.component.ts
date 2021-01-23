import { Component, Input, OnInit } from '@angular/core';
import { WookieMovie } from '../../../logic/models/wookie-movie.model';

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
