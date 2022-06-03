import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // key d281ed8b
  baseUrl: string
  

  constructor(private http:HttpClient) {
    this.baseUrl = 'http://www.omdbapi.com/?apikey=d281ed8b'
  }

  getmovies(searchTerm: string):Observable<any> {
    return this.http.get(`${this.baseUrl}&s=${searchTerm}`)
  }
}
