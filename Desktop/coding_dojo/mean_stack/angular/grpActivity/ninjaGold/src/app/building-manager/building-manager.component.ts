import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-building-manager",
  templateUrl: "./building-manager.component.html",
  styleUrls: ["./building-manager.component.css"],
})
export class BuildingManagerComponent implements OnInit {
  @Input() score: number;
  @Output() changedGold = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  buildingClicked(min: number, max: number): void {
    this.score += Math.floor(Math.random() * (max - min + 1)) + min;
    this.changedGold.emit(this.score);
  }
}
