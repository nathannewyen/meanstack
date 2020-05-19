import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Restful Tasks API";
  tasks = [];
  task = "";
  newTask: any;
  editTask: any;
  editTog: boolean = false;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getTasksFromService();
    this.newTask = { first_name: "", last_name: "" };
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe((data) => {
      this.tasks = data["data"];
    });
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe((data) => {
      this.newTask = { first_name: "", last_name: "" };
      this.getTasksFromService();
    });
  }

  editForm(task) {
    this.editTask = {
      _id: task._id,
      first_name: task.first_name,
      last_name: task.last_name,
    };
    this.editTog = true;
  }

  onEdit() {
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe((data) => {
      this.editTog = false;
      this.getTasksFromService();
    });
  }

  onDelete(task) {
    let observable = this._httpService.deleteTask(task);
    observable.subscribe((data) => {
      this.getTasksFromService();
    });
  }
}
