import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RateSubmitComponent } from "./rate-submit/rate-submit.component";
import { CakeInfoComponent } from "./cake-info/cake-info.component";

import { HttpService } from "./rate-submit/http.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, RateSubmitComponent, CakeInfoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
