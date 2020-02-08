import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RESTGameDataService } from '../../services/restgame-data.service';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameCategory, Game } from '../../common/interface';


@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  name: string;
  slug: string;
  gameList: Game[];
  private dataSub: Subscription;

  constructor(private route: ActivatedRoute, private dataService: RESTGameDataService) { }

  ngOnInit() {

    this.dataSub = combineLatest([this.route.paramMap, this.dataService.gameCategories])
      .pipe(
        map((params) => {
          let paramMap = params[0] as any;
          let slug = paramMap.params.slug;
          let catArray = params[1] as any;
          let category = catArray.find(cat => cat.slug === slug);
          return category;
        })
      )
      .subscribe( result => {
          this.name = result.name;
          this.gameList = result._embedded.games;
        }
      );

  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

}
