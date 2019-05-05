import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movies/movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:movieId', component: MovieComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'tvseries', component: TvseriesComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
