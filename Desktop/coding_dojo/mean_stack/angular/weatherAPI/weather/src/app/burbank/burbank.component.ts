import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";

@Component({
  selector: "app-burbank",
  templateUrl: "./burbank.component.html",
  styleUrls: ["./burbank.component.scss"],
})
export class BurbankComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  city: any;

  ngOnInit() {
    this.city = { name: "" };
    this.getCityWeather();
  }

  getCityWeather() {
    let observable = this._httpService.getWeather("Burbank, US");
    observable.subscribe((data) => {
      this.city = data;
    });
  }
}
