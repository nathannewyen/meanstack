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

  getQuotes(id) {
    return this._http.get("/quotes/" + id);
  }

  addQuote(id, data) {
    return this._http.post(`/tasks/add/${id}`, data);
  }

  voteUp(id: any, quoteid: any) {
    return this._http.post(`/votes/${id}/${quoteid}`, {});
  }

  voteDown(id, quoteid) {
    return this._http.post(`/votesdown/${id}/${quoteid}`, {});
  }

  deleteQuote(id: any, quoteid: any) {
    return this._http.delete(`/tasks/${id}/${quoteid}/delete`, {});
  }
}
