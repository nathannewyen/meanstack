import { Component } from "@angular/core";
import { HttpService } from "./http.service";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  notes = [];
  error = "";
  newNote: any;
  moment: any = moment;

  constructor(private _httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.getNotesFromService();
    this.newNote = { note: "" };
  }

  getNotesFromService() {
    let observable = this._httpService.getAllNotes();
    observable.subscribe((data) => {
      this.notes = data["data"];
    });
  }

  onSubmit() {
    let observable = this._httpService.createNote(this.newNote);
    observable.subscribe((data: any) => {
      if (data.error) {
        this.error = data.error.errors.name.message;
      } else {
        this.getNotesFromService();
        this.router.navigate([""]);
      }
    });
  }
}
