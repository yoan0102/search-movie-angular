import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Movie, SearchApi } from '../interface/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // key d281ed8b
  private baseUrl: string;

  constructor(private http:HttpClient) {
    this.baseUrl = 'http://www.omdbapi.com/?apikey=d281ed8b'
  }

  getmovies(searchTerm: string):Observable<Movie[]> {
    return this.http.get<SearchApi>(`${this.baseUrl}&s=${searchTerm}`).pipe(
      map(resp => resp.Search)
    )
  }
}
