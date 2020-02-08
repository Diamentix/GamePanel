import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

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
  reactiveForm = new FormGroup({
    filterName: new FormControl()
  },
  {
    updateOn: 'submit'
  });

  private queryQLSubscription: Subscription;
  private queryRESTSubscription: Subscription;
  private gameCatSub: Subscription;
  private formSub: Subscription;

  constructor(private gameDataQL: QLGameDataService, private gameDataREST: RESTGameDataService) { }

  ngOnInit() {
    this.queryRESTSubscription = combineLatest([this.reactiveForm.get("filterName").valueChanges
    .pipe(startWith('')), this.gameDataREST.games])
      .pipe(
        map((params) => {
          let formsObj = params[0] as any;
          let filterValue = formsObj.toLowerCase();
          let gameArr = params[1] as any;
          let filteredGameList = filterValue ? gameArr.filter(game => game.name.toLowerCase().includes(filterValue)) : gameArr ;
          return filteredGameList;
        })
      )
      .subscribe(result => {
        this.gameList = result;
      });
  }

  ngOnDestroy() {
    this.queryRESTSubscription.unsubscribe();
  }
}
