import { Component, OnInit } from '@angular/core';
import { MainService } from '../app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = 'Movies';
  moviesList: Array<any>;
  loader = true;
  constructor(private mainService: MainService) {
    this.mainService.getDataforMovies().subscribe(moviesList => {
      this.moviesList = moviesList.movies;
      this.loader = false;
    });
  }

  ngOnInit() {

  }

}
