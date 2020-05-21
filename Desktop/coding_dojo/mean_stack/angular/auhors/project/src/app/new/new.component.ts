import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"],
})
export class NewComponent implements OnInit {
  authors = [];
  newAuthor: any;
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.getTasksFromService();
    this.newAuthor = { name: "" };
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe((data) => {
      this.authors = data["data"];
    });
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newAuthor);
    observable.subscribe((data) => {
      this.newAuthor = { name: "" };
      this.getTasksFromService();
      this._router.navigate(["home"]);
    });
  }
}
