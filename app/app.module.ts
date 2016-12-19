import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {TagsComponent} from './tags.component'
import {TagsFormComponent} from "./tags-form.component";

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  TagsComponent,
                  TagsFormComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
