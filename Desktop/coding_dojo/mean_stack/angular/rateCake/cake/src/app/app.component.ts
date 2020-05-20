import { Component } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "cake";
  cakes = [];

  newCake: any;
  newRating: any;
  selectedCake;
  avg;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getCakesFromService();
    this.newCake = { name: "", url: "" };
    this.newRating = { rating: "", comment: "" };
  }

  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe((data) => {
      this.cakes = data["data"];
    });
  }

  onSubmit() {
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe((data) => {
      this.newCake = { name: "", url: "" };
      this.getCakesFromService();
    });
  }

  ratingSubmit(cake) {
    let observable = this._httpService.addRating(
      { rating: cake.newRating, comment: cake.newComment },
      cake._id
    );
    observable.subscribe((data) => {
      // after successful submission of ratings do following.
      cake.newRating = "";
      cake.newComment = "";
      this.getCakesFromService();
    });
  }

  getCake(idx) {
    this.selectedCake = this.cakes[idx];
    var sum = 0;
    for (var i = 0; i < this.selectedCake.ratings.length; i++) {
      sum += this.selectedCake.ratings[i].rating;
    }
    this.avg = sum / this.selectedCake.ratings.length;
  }
}
