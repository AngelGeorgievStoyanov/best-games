import { Component } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IGame } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {


  games: IGame[] | undefined;
  arr : any;
  constructor(private contentService: ContentService) {
    this.fetchGames();
  }

  fetchGames(): void {
    this.games = undefined;
    this.contentService.getAllGames().subscribe(data => {
      this.games = data;
       this.arr = Object.values(this.games)
    
     console.log(this.arr)
     

    })

  }

}

//// Import toArray function
//import { toArray } from 'rxjs/operators';
//
//// Generic function to consume API
//searchObjects(term: string): Observable<theObject[]> {
//  requestUrl = this.url + term;
//  return this.http.get<theObject[]>(requestUrl, httpOptions).pipe(
//      // convert object to array
//      toArray<theObject>()
//  );
//}