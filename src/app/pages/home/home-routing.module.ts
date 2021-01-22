import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path: 'movie/details/:id', component: MovieDetailComponent},
  { path: 'search', component: MoviesSearchComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
