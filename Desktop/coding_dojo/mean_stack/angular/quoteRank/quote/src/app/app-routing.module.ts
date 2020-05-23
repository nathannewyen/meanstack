import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Route
import { NewComponent } from "./new/new.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";
import { HomeComponent } from "./home/home.component";
import { AddQuoteComponent } from "./add-quote/add-quote.component";

const routes: Routes = [
  {
    path: "new",
    component: NewComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "quotes/:id",
    component: DetailsComponent,
  },
  {
    path: "write/:id",
    component: AddQuoteComponent,
  },
  {
    path: "edit/:id",
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
