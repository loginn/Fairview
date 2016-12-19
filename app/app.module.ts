import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {TagListComponent} from './tags/tag-list.component'
import {TagFormComponent} from "./tags/tag-form.component";
import {TagComponent} from "./tags/tag.component";
import {CharacterDetailComponent} from "./character-detail.component";


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  TagListComponent,
                  TagFormComponent,
                  TagComponent,
                  CharacterDetailComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
