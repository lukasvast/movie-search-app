import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '../service/get-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GetMoviesService]
})
export class SearchComponent implements OnInit {

  movies:Movie[];
  results:string;

  constructor(private getMoviesService:GetMoviesService) {
  }

  search(movieTitle:string,movieYear:string,moviePage:string) {
    this.getMoviesService.getMovies(movieTitle,movieYear,moviePage).subscribe(movies=>{
      this.movies=movies.Search;
      this.results=movies.totalResults;
    });
  }

  ngOnInit() {
  }

}

interface Movie {
  Poster:string;
  Title:string;
  Type:string;
  Year:string;
  imdbID:string;
}
