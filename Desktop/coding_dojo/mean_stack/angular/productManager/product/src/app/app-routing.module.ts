import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductListComponent },
  { path: "products/new", component: AddProductComponent },
  { path: "products/edit/:id", component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
