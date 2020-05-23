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
  editAuthor: any;
  error = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.authorID = this.route.snapshot.paramMap.get("id");
    this.editAuthor = { name: "" };
    this.getSingleAuthor();
  }

  getSingleAuthor() {
    let observable = this.httpService.getOneTask(this.authorID);
    observable.subscribe((data) => {
      this.authorData = data;
    });
  }

  onEdit() {
    let observable = this.httpService.editTask(this.authorID, this.editAuthor);
    observable.subscribe((data: any) => {
      if (data.error) {
        this.error = data.error.errors.name.message;
      } else {
        this.editAuthor = { name: "" };
        this.getSingleAuthor();
        this.router.navigate(["home"]);
      }
    });
  }
}
