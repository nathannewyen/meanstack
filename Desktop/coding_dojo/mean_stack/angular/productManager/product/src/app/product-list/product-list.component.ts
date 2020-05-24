import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(private _httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService() {
    let observable = this._httpService.getProducts();
    observable.subscribe((data) => {
      this.products = data["data"];
    });
  }

  onDelete(id) {
    const observable = this._httpService.deleteProduct(id);
    observable.subscribe((data) => {
      this.router.navigate([""]);
    });
  }
}
