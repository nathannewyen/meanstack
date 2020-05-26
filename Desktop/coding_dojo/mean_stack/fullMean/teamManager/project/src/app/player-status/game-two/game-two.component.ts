import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-game-two",
  templateUrl: "./game-two.component.html",
  styleUrls: ["./game-two.component.scss"],
})
export class GameTwoComponent implements OnInit {
  teams = [];
  currentStatus: string;

  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers() {
    let observable = this._httpService.getAllPlayers();
    observable.subscribe((data) => {
      this.teams = data["data"];
    });
  }

  status(id, event) {
    this.currentStatus = event.path[0].innerText;
    const ob = this._httpService.addAction(id, { action: this.currentStatus });
    ob.subscribe((data) => {
      this.getAllPlayers();
    });
  }
}
