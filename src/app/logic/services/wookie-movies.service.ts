import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WookieMovies, WookieMovie } from '../models/wookie-movie.model';
import { Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WookieMoviesService {

  
  constructor(private http: HttpClient) {}

  getMovies(): Observable<WookieMovies> {
    return this.http.get<WookieMovies>(`${environment.apiurl}`);
  }

  searchMovie(searchTxt: string): Observable<WookieMovies> {
    const url = `${environment.apiurl}` + '?q=' + searchTxt;
    return this.http.get<WookieMovies>(url);
  }
}
