import { Component, OnInit, OnDestroy } from '@angular/core';
import { RESTGameDataService } from '../../services/restgame-data.service';
import { Subscription } from 'rxjs';
import { GameCategory } from '../../common/interface';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;
  public gameCategories: GameCategory[];  

  constructor(private dataService: RESTGameDataService) { }

  ngOnInit(): void {
    this.dataSubscription = this.dataService.gameCategories
    .subscribe( result => {
      console.log('categories: ', result);
      this.gameCategories = result;
      console.log('slug: ', result[0].slug);
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
