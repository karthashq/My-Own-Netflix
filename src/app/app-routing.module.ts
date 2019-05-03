import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'movies', component: MoviesListComponent, pathMatch: 'full' },
  { path: 'tvseries', component: TvseriesComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
