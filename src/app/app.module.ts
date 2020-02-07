import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MainViewComponent } from './components/main-view/main-view.component';
import { QLGameDataService } from './services/game-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [QLGameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
