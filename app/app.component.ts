import { Component } from '@angular/core';
import {TagService} from "./tags/tag.service";

@Component({
  selector: 'my-app',
  template: `<character-detail></character-detail>`,
  providers: [TagService]
})
export class AppComponent  { name = 'Angular'; }
