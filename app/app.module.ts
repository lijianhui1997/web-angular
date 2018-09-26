import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ComponentsfirstComponent } from './components/componentsfirst/componentsfirst.component';
import { ComponentschildComponent } from './components/componentschild/componentschild.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsfirstComponent,
    ComponentschildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
