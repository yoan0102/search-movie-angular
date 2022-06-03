import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any[] = []
  constructor(private moviesService:MovieService) { }

  ngOnInit(): void {
  }

  getMovies(searchTerm:string){
    this.moviesService.getmovies(searchTerm).subscribe(data => {
      this.movies= data.Search
    })
  }

}
