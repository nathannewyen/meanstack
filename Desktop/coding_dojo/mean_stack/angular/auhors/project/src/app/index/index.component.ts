import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  authors = [];
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getTasksFromService();
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe((data) => {
      this.authors = data["data"];
    });
  }

  onDelete(id: string) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe((data) => {
      this.getTasksFromService();
    });
  }
}
