import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/app.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() moviesList;
  loader  = false;
  start = 0;
  end = 20;
  constructor(private mainService: MainService) { }

  ngOnInit() {
  }

  movieRequestTemplate() {
    const template = {
      'start': this.start,
      'end': this.end
    };
    return template;
  }
  showPrvPage() {
    if (this.start !== 0) {
      this.start = this.start - 20;
      this.end = this.end - 20;
    }
    this.loader = true;
    this.mainService.getDataforMovies(this.movieRequestTemplate()).subscribe(moviesList => {
      this.moviesList = moviesList.movies;
      this.loader = false;
    });
  }

  showNextPage() {
    this.start = this.start + 20;
    this.end = this.end + 20;
    this.loader = true;
    this.mainService.getDataforMovies(this.movieRequestTemplate()).subscribe(moviesList => {
      this.moviesList = moviesList.movies;
      this.loader = false;
    });
  }
}
