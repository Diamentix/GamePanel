import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { QLGameDataService } from './services/game-data.service';

import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { MobileComponent } from './components/mobile/mobile.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryListComponent } from './components/category-list/category-list.component';


const appRoutes: Routes = [
  { path: 'category/:slug', component: CategoryViewComponent},
  { path: 'category/popular-games', component:CategoryListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'category', component: CategoryListComponent},
  { path: 'categories', component: CategoryListComponent},
  { path: 'home', component: MainViewComponent},
  { path: 'mobile', component: MobileComponent},
  { path: 'popular', redirectTo: 'category/popular-games'},
  { path: 'popular-games', redirectTo: 'category/popular-games'},
  { path: '**', component: MainViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    CategoryViewComponent,
    NavbarComponent,
    CategoryListComponent,
    MobileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
