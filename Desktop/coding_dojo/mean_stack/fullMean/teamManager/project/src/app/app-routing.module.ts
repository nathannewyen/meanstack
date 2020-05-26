import { ListPlayerComponent } from "./home/list-player/list-player.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CreateComponent } from "./create/create.component";
// Player Status
import { PlayerStatusComponent } from "./player-status/player-status.component";
import { GameOneComponent } from "./player-status/game-one/game-one.component";
import { GameTwoComponent } from "./player-status/game-two/game-two.component";
import { GameThreeComponent } from "./player-status/game-three/game-three.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "players/addplayer", component: CreateComponent },
      { path: "players/list", component: ListPlayerComponent },
    ],
  },
  {
    path: "status/game",
    component: PlayerStatusComponent,
    children: [
      { path: "1", component: GameOneComponent },
      { path: "2", component: GameTwoComponent },
      { path: "3", component: GameThreeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
