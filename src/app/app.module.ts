import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { TvseriesListComponent } from './tvseries/tvseries-list/tvseries-list.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movies/movie/movie.component';
import { SeriesComponent } from './tvseries/tvseries-list/series/series.component';
import { MainService } from './app.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PosterHoverDirective } from 'src/custom-directives/poster-hover.directive';
import { ValidImageCheck } from 'src/custom-pipes/poster-image.pipe';
import { CharacterLimiter } from 'src/custom-pipes/character-limiter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    TvseriesComponent,
    MoviesListComponent,
    TvseriesListComponent,
    HomeComponent,
    MovieComponent,
    SeriesComponent,

    // Directives
    PosterHoverDirective,

    // Pipes
    ValidImageCheck,
    CharacterLimiter

  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatTooltipModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
