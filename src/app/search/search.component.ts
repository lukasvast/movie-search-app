import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '../service/get-movies.service';
import { DetailsMoviesService } from '../service/details-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GetMoviesService, DetailsMoviesService]
})
export class SearchComponent implements OnInit {

  movies:Movie[];
  details:Detail;
  numPages:number;
  showPages:boolean;

  constructor(private getMoviesService:GetMoviesService, private detailsMoviesService:DetailsMoviesService) {
    this.showPages=false;
  }

  search(movieTitle:string,movieYear:string,moviePage:number) {
    this.getMoviesService.getMovies(movieTitle,movieYear,moviePage).subscribe(movies=>{
      this.movies=movies.Search;
      this.numPages=Math.round(movies.totalResults/10);
    });
    this.showPages=true;
    this.details=null;
  }

  getdetails(id:string) {
    this.detailsMoviesService.detailsMovie(id).subscribe(details=>{
      this.details=details;
      console.log(this.details);
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

interface Detail {
  Actors:string;
  Awards:string;
  Country:string;
  Director:string;
  Genre:string;
  Language:string;
  Metascore:string;
  Plot:string;
  Poster:string;
  Rated:string;
  Released:string;
  Response:string;
  Runtime:string;
  Title:string;
  Type:string;
  Writer:string;
  Year:string;
  imdbID:string;
  imdbRating:string;
  imdbVotes:string;
}
