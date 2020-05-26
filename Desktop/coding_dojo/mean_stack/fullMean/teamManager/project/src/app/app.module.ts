import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CreateComponent } from "./create/create.component";
import { PlayerStatusComponent } from "./player-status/player-status.component";
import { GameOneComponent } from "./player-status/game-one/game-one.component";
import { GameTwoComponent } from "./player-status/game-two/game-two.component";
import { GameThreeComponent } from "./player-status/game-three/game-three.component";
import { ListPlayerComponent } from './home/list-player/list-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    PlayerStatusComponent,
    GameOneComponent,
    GameTwoComponent,
    GameThreeComponent,
    ListPlayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
