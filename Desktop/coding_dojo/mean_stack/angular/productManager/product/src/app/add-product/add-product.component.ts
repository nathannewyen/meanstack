import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  products = [];
  newProduct: any;
  error = "";

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.getProductsFromService();
    this.newProduct = { title: "", price: 0, url: "" };
  }

  getProductsFromService() {
    let observable = this._httpService.getProducts();
    observable.subscribe((data) => {
      this.products = data["data"];
    });
  }

  onSubmit() {
    let observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe((data) => {
      this.getProductsFromService();
      this._router.navigate(["products"]);
    });
  }
}
