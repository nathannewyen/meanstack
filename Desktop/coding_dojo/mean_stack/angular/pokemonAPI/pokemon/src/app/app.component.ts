import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "pokemon";
  tasks = {};
  task = "";
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getPoke();
  }

  getPoke() {
    let observable = this._httpService.getPokemon();
    observable.subscribe((data) => {
      this.tasks = data;
      console.log(data);
      console.log(
        data["name"] +
          "'s abilities are " +
          data["abilities"][0].ability.name +
          " and " +
          data["abilities"][1].ability.name
      );
    });
  }
}
