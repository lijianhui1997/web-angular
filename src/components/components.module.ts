import { NgModule } from '@angular/core';
import { Zujian1Component } from './zujian1/zujian1';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [
    Zujian1Component],
	imports: [ BrowserModule ,
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [
    Zujian1Component]
})
export class ComponentsModule {}
