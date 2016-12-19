import {Component, Input} from "@angular/core";
import {FairviewTag} from "./fairviewTag";

@Component({
  moduleId: module.id,
  selector: 'tag-comp',
  templateUrl: 'tag.component.html',
})

export class TagComponent {
  @Input()
  tags: FairviewTag[];
  @Input()
  tag: FairviewTag;

  onClick():void {
    const index = this.tags.indexOf(this.tag);
    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }
}