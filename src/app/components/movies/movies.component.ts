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

  getMovies(searchTerm:string){
    this.moviesService.getmovies(searchTerm).subscribe(data => {
      if(data === 'false'){
        this.movies = []
        return
      }

      this.movies= data
    })
  }

}
