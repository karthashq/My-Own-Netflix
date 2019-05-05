import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/app.service';
import { DomSanitizer } from '@angular/platform-browser';

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
  trailerLink: any = '';
  constructor(private route: ActivatedRoute, private mainService: MainService, private domSanitizer: DomSanitizer) {
    this.route.params.subscribe((param) => {
      this.movieId = param.movieId;
      this.getMovieDetails();
    });
  }

  getMovieDetails() {
    this.mainService.getDetailsforMovieId(this.movieId).subscribe(response => {
      this.movieDetails = response;
      this.trailerLink = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.movieDetails.videoId);
      this.loading = false;
    });
    // to get movie comments
    this.mainService.getMovieComments(this.movieId).subscribe(response => {
      this.movieComments = response;
    });
  }
}
