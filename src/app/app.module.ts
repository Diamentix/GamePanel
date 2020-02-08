import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';


import { QLGameDataService } from './services/game-data.service';

import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MobileComponent } from './components/mobile/mobile.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryListComponent } from './components/category-list/category-list.component';


const appRoutes: Routes = [
  { path: 'category/:slug', component: CategoryViewComponent},
  { path: 'category', component: CategoryListComponent},
  { path: 'categories', component: CategoryListComponent},
  { path: 'mobile', component: MobileComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: MainViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    CategoryViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [QLGameDataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
