import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailsMoviesService {

  constructor(private http:Http) {
    console.log("DetailsMoviesService Initialized!")
  }

  detailsMovie(imdbID:string) {
    return this.http.get('http://www.omdbapi.com/?type=movie&i='+imdbID).map(res => res.json());
  }

}
