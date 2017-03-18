import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetMoviesService {

  constructor(private http:Http) {
    console.log("GetMovieService Initialized!")
  }

  getMovies(title:string, year:string, page:string) {
    return this.http.get('http://www.omdbapi.com/?page='+page+'&type=movie&y='+year+'&s='+title).map(res => res.json());
  }

}
