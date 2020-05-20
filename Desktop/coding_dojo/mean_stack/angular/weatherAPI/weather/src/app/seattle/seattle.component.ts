import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";

@Component({
  selector: "app-seattle",
  templateUrl: "./seattle.component.html",
  styleUrls: ["./seattle.component.scss"],
})
export class SeattleComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  city: any;

  ngOnInit() {
    this.city = { name: "" };
    this.getCityWeather();
  }

  getCityWeather() {
    let observable = this._httpService.getWeather("San Jose, US");
    observable.subscribe((data) => {
      this.city = data;
    });
  }
}
