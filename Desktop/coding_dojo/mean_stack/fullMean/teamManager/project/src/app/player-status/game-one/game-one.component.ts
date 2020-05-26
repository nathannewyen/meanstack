import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-game-one",
  templateUrl: "./game-one.component.html",
  styleUrls: ["./game-one.component.scss"],
})
export class GameOneComponent implements OnInit {
  playerID: string;
  playerData: any;
  teams = [];

  playing = false;
  statusPlaying = "Playing";

  notplaying = false;
  statusNotPlaying = "Not Playing";

  Undecided = false;
  statusUndecided = "Undecided";

  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.playerID = this.route.snapshot.paramMap.get("id");
    this.getAllPlayers();
  }

  getAllPlayers() {
    let observable = this._httpService.getAllPlayers();
    observable.subscribe((data) => {
      this.teams = data["data"];
    });
  }

  Playing(playerID) {
    this.playing = !this.playing;
    this.statusPlaying = this.playing ? "Playing" : "Playing";
    console.log(this.playerID);
  }

  notPlaying() {
    this.notplaying = !this.notplaying;
    this.statusNotPlaying = this.notplaying ? "Not Playing" : "Not Playing";
  }

  undecided() {
    this.Undecided = !this.Undecided;
    this.statusNotPlaying = this.Undecided ? "Undecided" : "Undecided";
  }
}
