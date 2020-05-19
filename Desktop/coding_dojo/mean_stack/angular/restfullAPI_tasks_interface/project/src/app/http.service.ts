import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks() {
    return this._http.get("/tasks");
  }

  getOneTask(id: string) {
    return this._http.get("/tasks/" + id);
  }

  addTask(newuser) {
    return this._http.post("/tasks", newuser);
  }

  deleteTask(user) {
    return this._http.delete(`/tasks/${user._id}`, user);
  }
}
