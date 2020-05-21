import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ReviewsComponent } from "./reviews/reviews.component";

// Product
import { DetailsComponent } from "./products/details/details.component";
import { BrandComponent } from "./products/brand/brand.component";
import { CategoryComponent } from "./products/category/category.component";

// Review
import { ReviewDetailsComponent } from "./reviews/review-details/review-details.component";
import { ReviewAuthorComponent } from "./reviews/review-author/review-author.component";
import { AllComponent } from "./reviews/all/all.component";

const routes: Routes = [
  // Product
  {
    path: "products",
    component: ProductsComponent,
    children: [
      {
        path: "details/:id",
        component: DetailsComponent,
      },
      {
        path: "brand/:brand",
        component: BrandComponent,
      },
      {
        path: "category/:cat",
        component: CategoryComponent,
      },
    ],
  },
  // Review
  {
    path: "reviews",
    component: ReviewsComponent,
    children: [
      {
        path: "details/:id",
        component: ReviewDetailsComponent,
      },
      {
        path: "author/:id",
        component: ReviewAuthorComponent,
      },
      {
        path: "all/:id",
        component: AllComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
