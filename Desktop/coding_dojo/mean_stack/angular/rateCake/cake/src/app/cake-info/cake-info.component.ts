import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cake-info",
  templateUrl: "./cake-info.component.html",
  styleUrls: ["./cake-info.component.scss"],
})
export class CakeInfoComponent implements OnInit {
  @Input() cakesToShow: any;
  @Input() avgRating: any;

  constructor() {}

  ngOnInit() {}
}
