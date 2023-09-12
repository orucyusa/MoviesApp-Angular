import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];
  movieLength: number = 0;
  constructor(private movieService: MovieService) { }

  ngOnInit(){ 
    this.getMovies();
   }
   getMovies() : void {
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies.slice(0,5);
        this.movieLength = movies.length;
      })
   }
}
