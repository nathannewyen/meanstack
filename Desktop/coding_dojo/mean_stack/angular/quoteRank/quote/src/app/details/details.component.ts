import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  authorID: string;
  authorData: any;
  vote: number;
  quoteData: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.authorID = this.route.snapshot.paramMap.get("id");
    this.getSingleAuthor();
  }

  getSingleAuthor() {
    let observable = this.httpService.getOneTask(this.authorID);
    observable.subscribe((data) => {
      this.authorData = data;
    });
  }

  voteUp(id, quoteid) {
    const observable = this.httpService.voteUp(id, quoteid);
    observable.subscribe((data) => {
      this.getSingleAuthor();
      this.router.navigate([`/quotes/${id}`]);
    });
  }

  voteDown(id, quoteid) {
    const observable = this.httpService.voteDown(id, quoteid);
    observable.subscribe((data) => {
      this.getSingleAuthor();
      this.router.navigate([`/quotes/${id}`]);
    });
  }

  deleteQuote(id, quoteid) {
    const observable = this.httpService.deleteQuote(id, quoteid);
    observable.subscribe((data) => {
      this.router.navigate(["home"]);
    });
  }
}
