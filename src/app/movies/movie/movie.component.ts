import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/app.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movieId: string;
  movieComments: any = [];
  movieDetails: any;
  loading = true;
  constructor(private route: ActivatedRoute, private mainService: MainService) {
    this.route.params.subscribe((param) => {
      this.movieId = param.movieId;
      this.getMovieDetails();
    });
  }

  getMovieDetails() {
    this.mainService.getDetailsforMovieId(this.movieId).subscribe(response => {
      this.movieDetails = response;
      console.log(this.movieDetails);
      this.loading = false;
    });
    // to get movie comments
    this.mainService.getMovieComments(this.movieId).subscribe(response => {
      this.movieComments = response;
    });
  }
}
