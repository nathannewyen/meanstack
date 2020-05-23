import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.scss"],
})
export class EditProductComponent implements OnInit {
  id = "";
  editProduct: any;
  error = "";
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getOneProduct();
    this.editProduct = { title: "", price: 0, url: "" };
  }

  getOneProduct() {
    let observable = this._httpService.oneProduct(this.id);
    observable.subscribe((data) => {
      this.editProduct = data;
      console.log(data);
    });
  }

  onEdit() {
    let observable = this._httpService.editProduct(this.id, this.editProduct);
    observable.subscribe((data) => {
      this.getOneProduct();
      this.editProduct = data;
      console.log(data);
    });
  }
}
