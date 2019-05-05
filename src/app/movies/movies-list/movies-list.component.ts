import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MainService } from 'src/app/app.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  start = 0;
  end = 20;
  theEnd = false;
  loadingNextBatch = false;
  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );
    this.infinite = batchMap.pipe(map((v) => { this.loadingNextBatch = false; return Object.values(v); }));
  }

  movieRequestTemplate() {
    const template = {
      'start': this.start,
      'end': this.start + 20
    };
    return template;
  }

  getBatch(offset) {
    console.log(offset);
    return this.mainService.getDataforMovies(this.movieRequestTemplate())
      .pipe(
        tap(arr => (arr.movies.length ? null : (this.theEnd = true))),
        map(response => {
          const arr = response.movies;
          return arr.reduce((acc, cur) => {
            const id = cur._id;
            const data = cur;
            return { ...acc, [id]: data };
          }, {});
        })
      );
  }

  nextBatch(e) {
    if (this.theEnd) {
      return;
    }

    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log(`${end}, '>=', ${total}`);
    if (end === total) {
      this.start = end;
      this.loadingNextBatch = true;
      this.offset.next(null);
    }
  }

  trackByIdx(i) {
    return i;
  }

  showMovieDetails(event, movieDetails) {
    if (event.srcElement.className.indexOf('openMovie') > -1) {
      this.router.navigate(['/movie', movieDetails._id]);
    }
  }
}
