import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ExampleThreeComponent} from './example-three/example-three.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleOneComponent } from './example-one/example-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleThreeComponent,
    ExampleTwoComponent,
    ExampleOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
