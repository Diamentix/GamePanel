import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { QLGameDataService } from '../../services/game-data.service';
import { RESTGameDataService} from '../../services/restgame-data.service';

import { GameCategory, Game } from '../../common/interface';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  providers: [QLGameDataService, RESTGameDataService]
})
export class MainViewComponent implements OnInit, OnDestroy {

  lobby: any;
  gamesListQL: any[];
  loading = true;
  gameList: Game[];
  popLoading = true;

  private queryQLSubscription: Subscription;
  private queryRESTSubscription: Subscription;
  private gameCatSub: Subscription;

  constructor(private gameDataQL: QLGameDataService, private gameDataREST: RESTGameDataService) { }

  ngOnInit() {

    // this.queryQLSubscription = this.gameDataQL.getGameCategories()
    // .subscribe(({
    //   data, loading
    // }) => {
    //   this.loading = loading;
    //   this.lobby = data;
    //   this.gamesListQL = data.lobby.games;
    //   console.log('lobby: ', this.lobby);
    //   console.log('gamesList: ', this.gamesListQL);
    // });

    this.queryRESTSubscription = this.gameDataREST.games
    .subscribe( result => {
      console.log('result: ', result);
      this.gameList = result;
    });

    console.log('restSub: ', this.queryRESTSubscription);

    // this.gameCatSub = this.gameDataREST.gameCategories
    // .subscribe( result => {
    //   console.log('categories: ', result);
    //   this.popularGamesList = result[5]._embedded.games;
    //   console.log('popularGames: ', this.popularGamesList);
    // });
  }

  ngOnDestroy() {
    // this.queryQLSubscription.unsubscribe();
    this.queryRESTSubscription.unsubscribe();
    // this.gameCatSub.unsubscribe();
  }

}
