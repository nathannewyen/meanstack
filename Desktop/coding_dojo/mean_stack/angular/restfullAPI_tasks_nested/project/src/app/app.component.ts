import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Restful Tasks API Interactive";
  users = [];
  user = "";

  oneUser = [];
  UserId = "";

  info: boolean = false;
  water_info: boolean = false;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {}

  getUsersFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe((data) => {
      this.users = data["data"];
    });
  }

  getOneUserFromService(id) {
    let observable = this._httpService.getOneTask(id);
    observable.subscribe((data) => {
      this.oneUser = [data["data"]];
    });
  }

  getAllUsersWithClick() {
    this.getUsersFromService();
    this.info = true;
  }

  getOneUserWithClick() {
    this.getOneUserFromService(this.UserId);
  }

  onKey(event: any) {
    this.UserId = event.target.value;
  }
}
