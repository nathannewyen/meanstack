import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  getAllPlayers() {
    return this._http.get("/show");
  }

  addPlayer(newplayer) {
    return this._http.post("/add", newplayer);
  }

  getOnePlayer(id) {
    return this._http.get(`/show/${id}`);
  }

  deletePlayer(id) {
    return this._http.delete(`/delete/${id}`);
  }
}
