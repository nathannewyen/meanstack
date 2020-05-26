import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-game-two",
  templateUrl: "./game-two.component.html",
  styleUrls: ["./game-two.component.scss"],
})
export class GameTwoComponent implements OnInit {
  teams = [];
  toggle = true;
  status = "Enable";

  constructor(private _httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers() {
    let observable = this._httpService.getAllPlayers();
    observable.subscribe((data) => {
      this.teams = data["data"];
    });
  }
}
