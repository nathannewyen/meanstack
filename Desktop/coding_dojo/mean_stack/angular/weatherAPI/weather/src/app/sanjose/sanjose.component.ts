import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";

@Component({
  selector: "app-sanjose",
  templateUrl: "./sanjose.component.html",
  styleUrls: ["./sanjose.component.scss"],
})
export class SanjoseComponent implements OnInit {
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
