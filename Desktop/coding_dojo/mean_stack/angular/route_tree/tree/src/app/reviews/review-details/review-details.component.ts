import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-review-details",
  templateUrl: "./review-details.component.html",
  styleUrls: ["./review-details.component.scss"],
})
export class ReviewDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  reviewId: number;

  ngOnInit() {
    this.reviewId = this.route.snapshot.params["id"];
  }
}
