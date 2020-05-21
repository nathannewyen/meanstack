import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { DetailsComponent } from "./products/details/details.component";
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';
import { ReviewDetailsComponent } from './reviews/review-details/review-details.component';
import { ReviewAuthorComponent } from './reviews/review-author/review-author.component';
import { AllComponent } from './reviews/all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    DetailsComponent,
    BrandComponent,
    CategoryComponent,
    ReviewDetailsComponent,
    ReviewAuthorComponent,
    AllComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
