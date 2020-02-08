import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { QLGameDataService } from './services/game-data.service';

import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    CategoryViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    MatToolbarModule,
  ],
  providers: [QLGameDataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
