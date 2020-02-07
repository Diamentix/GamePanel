import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CategoriesResponse, GameCategory } from '../common/interface';

const urlREST = 'https://staging-frontapi.cherrytech.com/';
const httpParams = {
  brand: 'cherrycasino.desktop',
  locale: 'en'
}
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class RESTGameDataServiceService {
  private cache$: Observable<GameCategory[]>;

  constructor(private http: HttpClient) { }

  public getRestAPIGamesData() {
    const games = 'games';
    return this.http.get(`${urlREST}${games}`, {params: httpParams});
  }

  public getRestAPIGameCategoriesData() {
    const gameCategories = 'game-categories'
    return this.http.get<CategoriesResponse>(`${urlREST}${gameCategories}`, {params: httpParams})
    .pipe(
      map(response => response._embedded.game_categories)
    )
  }

  get gameCategories() {
    if (!this.cache$) {
      this.cache$ = this.getRestAPIGameCategoriesData()
        .pipe(
          shareReplay(CACHE_SIZE)
        );
    }

    return this.cache$;
  }
}
