import { Component, Input, OnInit } from '@angular/core';
import {Movie} from "../../interface/movies";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {
  @Input('movie') public movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }


  getImagen(){
    return this.movie.Poster === 'N/A' ? 'https://via.placeholder.com/600' : this.movie.Poster
  }
}
