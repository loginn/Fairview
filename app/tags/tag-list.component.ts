import {Component, OnInit, Input} from '@angular/core';
import {FairviewTag} from "./fairviewTag";
import {TagService} from "./tag.service";


@Component({
  moduleId: module.id,
  selector: 'tag-list',
   templateUrl: 'tag-list.component.html',
})

export class TagListComponent implements OnInit {
  constructor(
    private tagsService: TagService
  ) {}

  ngOnInit(): void {
    if (typeof this.tags === 'undefined') {
      this.getTags();
    }
  }

  getTags(): void {
    this.tagsService.getTags().then((tags) => this.tags = tags);
  }

  @Input()
  tags: FairviewTag[];
}