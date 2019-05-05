import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonConstants } from 'src/CommonConstants';
import { Observable } from 'rxjs';

@Injectable()
export class MainService {
    httpOptions: Object;
    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // 'Authorization': 'my-auth-token'
            })
        };
    }

    getTestData(): Observable<any> {
        return this.http.get(CommonConstants.testConnection, this.httpOptions);
    }

    getDataforMovies(movieRequestTemplate?): Observable<any> {
        if (!movieRequestTemplate) {
            movieRequestTemplate = { start: 0, end: 20 };
        }
        const url = `${CommonConstants.getMovieURL}`;
        return this.http.post(url, movieRequestTemplate, this.httpOptions);
    }

    getMovieComments(movieId) {
        const url = `${CommonConstants.getCommentsforMovie}/${movieId}`;
        return this.http.get(url, this.httpOptions);
    }

    getDetailsforMovieId(movieId) {
        const url = `${CommonConstants.getDetailsforMovieId}/${movieId}`;
        return this.http.get(url, this.httpOptions);
    }
}
