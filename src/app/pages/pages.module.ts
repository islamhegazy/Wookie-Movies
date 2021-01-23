import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { PagesComponent } from './pages.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './shared-components/movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';

const NB_MODULES = [
  PagesRoutingModule,
    LayoutModule,
    MatCardModule,
    MatButtonModule,
];
const COMPONENTS = [
  PagesComponent,
  HomeComponent,
  MovieComponent,
  MovieDetailComponent,
  MoviesSearchComponent
];


@NgModule({
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})

export class PagesModule { }
