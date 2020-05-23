import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-quote",
  templateUrl: "./add-quote.component.html",
  styleUrls: ["./add-quote.component.scss"],
})
export class AddQuoteComponent implements OnInit {
  authorID: string;
  authorData: any;
  quote: string;

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

  addQuoteSubmit() {
    const observable = this.httpService.addQuote(this.authorID, {
      quote: this.quote,
    });
    observable.subscribe((data) => {
      this.getSingleAuthor();
      this.router.navigate([`quotes/${this.authorID}`]);
    });
  }
}
