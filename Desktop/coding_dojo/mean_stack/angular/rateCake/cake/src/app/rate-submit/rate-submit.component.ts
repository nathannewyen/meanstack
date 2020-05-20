import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-rate-submit",
  templateUrl: "./rate-submit.component.html",
  styleUrls: ["./rate-submit.component.scss"],
})
export class RateSubmitComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  ngOnInit() {}
}
