import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getCakes() {
    return this._http.get("/cakes");
  }

  addCake(newcake) {
    return this._http.post("/addcake", newcake);
  }

  addRating(newRating, cakeId) {
    console.log(newRating);
    return this._http.post(`/ratings/${cakeId}`, newRating);
  }
}
