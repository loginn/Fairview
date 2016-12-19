import { Component } from '@angular/core';
import {TagsService} from "./tags.service";

@Component({
  selector: 'my-app',
  template: `<tags-component>Loading</tags-component>`,
  providers: [TagsService]
})
export class AppComponent  { name = 'Angular'; }
