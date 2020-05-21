import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewComponent } from "./new/new.component";
import { IndexComponent } from "./index/index.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {
    path: "home",
    component: IndexComponent,
  },
  {
    path: "new",
    component: NewComponent,
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
