import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "weather";
  constructor(private _router: Router) {}
  ngOnInit() {}
  goHome() {
    this._router.navigate(["/home"]);
  }
}
