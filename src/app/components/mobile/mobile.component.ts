import { Component, OnInit } from '@angular/core';
import { QLGameDataService } from '../../services/game-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  private queryQLSubscription: Subscription;
  public loading = true;
  public gamesListQL: any[];

  constructor(private gameDataQL: QLGameDataService) { }

  ngOnInit(): void {
    this.queryQLSubscription = this.gameDataQL.getGameCategories()
    .subscribe(({
      data, loading
    }) => {
      this.loading = loading;
      this.gamesListQL = data.lobby.games;
    });
  }

}
