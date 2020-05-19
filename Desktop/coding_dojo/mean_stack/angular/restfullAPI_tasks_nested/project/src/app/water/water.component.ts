import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-water",
  templateUrl: "./water.component.html",
  styleUrls: ["./water.component.css"],
})
export class WaterComponent implements OnInit {
  water_info: boolean = false;

  constructor() {}

  ngOnInit() {}

  getWaterWithClick() {
    this.water_info = true;
  }

  hideWaterWithClick() {
    this.water_info = false;
  }
}
