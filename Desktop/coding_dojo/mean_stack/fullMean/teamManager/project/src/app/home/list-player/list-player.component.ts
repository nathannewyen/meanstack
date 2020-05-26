import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-player",
  templateUrl: "./list-player.component.html",
  styleUrls: ["./list-player.component.scss"],
})
export class ListPlayerComponent implements OnInit {
  players = [];

  constructor(private _httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers() {
    let observable = this._httpService.getAllPlayers();
    observable.subscribe((data) => {
      this.players = data["data"];
    });
  }
  onDelete(id) {
    const observable = this._httpService.deletePlayer(id);
    observable.subscribe((data) => {
      this.getAllPlayers();
      this.router.navigate(["/players/list"]);
    });
  }
}
