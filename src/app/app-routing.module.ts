import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'tvseries', component: TvseriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
