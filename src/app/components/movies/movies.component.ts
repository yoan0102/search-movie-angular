import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []
  constructor(private moviesService:MovieService) { }

  ngOnInit(): void {
  }

  getMovies(event: any){
   const searchTerm = (event.target as HTMLInputElement).value;
    this.moviesService.getmovies(searchTerm).subscribe(data => {
      this.movies= data !== undefined ? data : [];
    })
  }

}
