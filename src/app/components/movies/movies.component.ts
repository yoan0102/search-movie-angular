import {Component, ElementRef,  OnInit, ViewChild} from '@angular/core';
import { Movie } from 'src/app/interface/movies';
import { MovieService } from 'src/app/services/movie.service';
import {debounceTime, distinct, filter, fromEvent, map, Observable, Subscription, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  @ViewChild('movieSearchInput', {static:true}) movieSearchInput!: ElementRef;
  movies$!: Observable<Movie[]>;

  constructor(private moviesService: MovieService) { }


  ngOnInit(): void {
    this.movies$ = fromEvent<Event>(
      this.movieSearchInput.nativeElement,
      'keyup'
    )
      .pipe(
        map((event: Event) => {
          const searchTerm = (event.target as HTMLInputElement).value;
          return searchTerm;
        }),
        filter((searchTerm: string) => searchTerm.length > 3),
        debounceTime(500),
        distinct(),
        switchMap((searchTerm: string) =>
          this.moviesService.getmovies(searchTerm)
        )
        // tap((searchTerm: string) => console.log(searchTerm) )
      )
      // .subscribe((movies: Movie[]) => {
      //   this.movies = movies !== undefined ? movies : [];
      // });
  }

  // getMovies(searchTerm: string){
  //   this.moviesService.getmovies(searchTerm).subscribe(data => {
  //     this.movies= data !== undefined ? data : [];
  //   })
  // }

  // ngOnDestroy(): void {
  //   this.movieSubcription.unsubscribe();
  // }

}
