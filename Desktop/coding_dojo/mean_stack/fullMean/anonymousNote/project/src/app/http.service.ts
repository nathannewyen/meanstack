import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAllNotes() {
    return this._http.get("/show");
  }

  createNote(newnote) {
    return this._http.post("/create", newnote);
  }
}
