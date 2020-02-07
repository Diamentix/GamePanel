import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const urlREST = 'https://staging-frontapi.cherrytech.com/';
const httpParams = {
  brand: 'cherrycasino.desktop',
  locale: 'en'
}
const CACHE_SIZE = 1;

export interface CategoriesResponse {
  _links: Object,
  _embedded: EmbeddedCategories,
  total_items: number
}

export interface EmbeddedCategories {
  game_categories: Array<GameCategories>
}

export interface GameCategories {
  name: string,
  order: number,
  slug: string,

}

@Injectable({
  providedIn: 'root'
})
export class RESTGameDataServiceService {
  private cache$: Observable<any>;

  constructor(private http: HttpClient) { }

  public getRestAPIGamesData() {
    const games = 'games';
    return this.http.get(`${urlREST}${games}`, {params: httpParams});
  }

  public getRestAPIGameCategoriesData() {
    const gameCategories = 'game-categories'
    return this.http.get(`${urlREST}${gameCategories}`, {params: httpParams});
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
