import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetMoviesService {

  constructor(private http:Http) {
    console.log("GetMoviesService Initialized!")
  }

  getMovies(title:string, year:string, page:number) {
    return this.http.get('http://www.omdbapi.com/?type=movie&page='+page+'&y='+year+'&s='+title).map(res => res.json());
  }

}
