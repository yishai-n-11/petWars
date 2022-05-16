import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './gameBoard/game-board/game-board.component';
import { DeckComponent } from './gameBoard/game-board/deck/deck.component';
import { MainComponent } from './gameBoard/game-board/main/main.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    DeckComponent,
    MainComponent,
    LeaderboardComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
