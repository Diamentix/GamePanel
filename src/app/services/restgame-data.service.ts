import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CategoriesResponse, GameCategory, Game, GamesResponse } from '../common/interface';

const urlREST = 'https://staging-frontapi.cherrytech.com/';
const httpParams = {
  brand: 'cherrycasino.desktop',
  locale: 'en'
}
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class RESTGameDataService {
  private categoryCache$: Observable<GameCategory[]>;
  private gameCache$: Observable<Game[]>;

  constructor(private http: HttpClient) { }

  private getRestAPIGamesData() {
    const games = 'games';
    return this.http.get<GamesResponse>(`${urlREST}${games}`, {params: httpParams})
    .pipe(
      map(response => response._embedded.games)
    );
  }

  private getRestAPIGameCategoriesData() {
    const gameCategories = 'game-categories'
    return this.http.get<CategoriesResponse>(`${urlREST}${gameCategories}`, {params: httpParams})
    .pipe(
      map(response => response._embedded.game_categories)
    )
  }

  get games() {
    if (!this.gameCache$) {
      this.gameCache$ = this.getRestAPIGamesData()
        .pipe(
          shareReplay(CACHE_SIZE)
        );
    }

    return this.gameCache$;
  }

  get gameCategories() {
    if (!this.categoryCache$) {
      this.categoryCache$ = this.getRestAPIGameCategoriesData()
        .pipe(
          shareReplay(CACHE_SIZE)
        );
    }

    return this.categoryCache$;
  }
}
