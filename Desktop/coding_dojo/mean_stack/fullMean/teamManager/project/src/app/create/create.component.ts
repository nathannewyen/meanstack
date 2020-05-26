import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  players = [];
  newPlayer: any;
  error = "";

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.getAllPlayers();
    this.newPlayer = { name: "", position: "" };
  }

  getAllPlayers() {
    let observable = this._httpService.getAllPlayers();
    observable.subscribe((data) => {
      this.players = data["data"];
    });
  }

  onSubmit() {
    let observable = this._httpService.addPlayer(this.newPlayer);
    observable.subscribe((data: any) => {
      if (data.error) {
        this.error = data.error.errors.name.message;
        this._router.navigate(["/players/addplayer"]);
      } else {
        this.getAllPlayers();
        this._router.navigate(["/players/list"]);
      }
    });
  }
}
