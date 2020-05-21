import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-review-author",
  templateUrl: "./review-author.component.html",
  styleUrls: ["./review-author.component.scss"],
})
export class ReviewAuthorComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  reviewAuthorId: number;

  ngOnInit() {
    this.reviewAuthorId = this.route.snapshot.params["id"];
  }
}
