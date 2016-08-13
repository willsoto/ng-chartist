import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DemoAppComponent } from './demo';

@NgModule({
  declarations: [DemoAppComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [DemoAppComponent]
})
export class AppModule {}
