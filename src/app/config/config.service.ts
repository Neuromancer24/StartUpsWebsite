import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Episode {
    id: number,
    title: string;
    brief: string;
    content: any;
}

// export interface EpisodeGetModelServerResponse {
//   count: number;
//   stores: Episode[];
//   }

//   export interface EpisodeAdminModelServerResponse {
//     count: number;
//     stores: Episode;
//     }


@Injectable()
export class ConfigService {
  configUrl = 'https://squatsandstartups.azurewebsites.net/api/Episode';
  //configUrl = 'http://localhost:2486/api/Episode';

  constructor(private http: HttpClient) { }

  getEpisodes() {
    return this.http.get<Episode[]>(this.configUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  postEpisodes(episode: Episode) {
    var headers_object = new HttpHeaders();
headers_object.append('Content-Type', 'application/json');

const httpOptions = {
  headers: headers_object
};
    return this.http.post<any>(this.configUrl, episode, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}