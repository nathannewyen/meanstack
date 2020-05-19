import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { WaterComponent } from './water/water.component';

@NgModule({
  declarations: [AppComponent, WaterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
