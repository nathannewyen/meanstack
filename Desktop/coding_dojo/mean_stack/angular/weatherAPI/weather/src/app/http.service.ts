import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  ngOnInit() {}
  getWeather(cityname) {
    return this._http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=1af62150d9d532b8dc93c112555e29dc`
    );
  }
}
