import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getTasks() {
    return this._http.get("/tasks");
  }

  getOneTask(id) {
    return this._http.get(`/tasks/${id}`);
  }

  addTask(newtask) {
    return this._http.post("/tasks", newtask);
  }

  editTask(id, data) {
    return this._http.put(`/tasks/${id}`, data);
  }

  deleteTask(id: string) {
    return this._http.delete(`/delete/${id}`);
  }
}
