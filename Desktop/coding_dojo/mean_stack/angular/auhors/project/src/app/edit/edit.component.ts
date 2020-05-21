import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  authorID: string;
  authorData: any = {};
  name: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.authorID = this.route.snapshot.paramMap.get("id");
    console.log(this.authorID);
    this.getSingleAuthor();
  }

  getSingleAuthor() {
    let ob = this.httpService.getOneTask(this.authorID);
    ob.subscribe((data) => {
      this.authorData = data;
    });
  }

  onEdit() {
    let ob = this.httpService.editTask(this.authorID, { name: this.name });
    ob.subscribe((data) => {});
    this.router.navigate(["home"]);
  }
}
