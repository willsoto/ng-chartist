import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ChartistModule } from "ng-chartist";
import { AppComponent } from "./app.component";
import {
  AsyncChartComponent,
  DynamicChartComponent,
  LiveChartComponent,
  TooltipChartComponent,
} from "./components";

@NgModule({
  declarations: [
    AppComponent,
    AsyncChartComponent,
    DynamicChartComponent,
    LiveChartComponent,
    TooltipChartComponent,
  ],
  imports: [BrowserModule, ChartistModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
