import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileComponent } from './mobile.component';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';

describe('MobileComponent', () => {
  let component: MobileComponent;
  let fixture: ComponentFixture<MobileComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileComponent ],
      imports: [ ApolloTestingModule ]
    })
    .compileComponents();

    controller = TestBed.get(ApolloTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
