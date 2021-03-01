import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';


@NgModule({
 
  imports: [
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
  //entryComponents: [
  //  AnalyticsCounterComponent
 // ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('popup-element', myElement);
  }
  ngDoBootstrap() {}
}
