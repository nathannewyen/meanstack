import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChicagoComponent } from "./chicago/chicago.component";
import { WashingtonComponent } from "./washington/washington.component";
import { DallasComponent } from "./dallas/dallas.component";
import { BurbankComponent } from "./burbank/burbank.component";
import { SanjoseComponent } from "./sanjose/sanjose.component";
import { SeattleComponent } from "./seattle/seattle.component";

const routes: Routes = [
  {
    path: "dallas",
    component: DallasComponent,
  },
  {
    path: "seattle",
    component: SeattleComponent,
  },
  {
    path: "sanjose",
    component: SanjoseComponent,
  },
  {
    path: "burbank",
    component: BurbankComponent,
  },
  {
    path: "washington",
    component: WashingtonComponent,
  },
  {
    path: "chicago",
    component: ChicagoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
