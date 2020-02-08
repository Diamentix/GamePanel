import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryViewComponent } from './category-view.component';
import { ActivatedRoute } from '@angular/router';
import { RESTGameDataService } from '../../services/restgame-data.service';

describe('CategoryViewComponent', () => {
  let component: CategoryViewComponent;
  let fixture: ComponentFixture<CategoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryViewComponent ],
      providers: [ActivatedRoute]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
