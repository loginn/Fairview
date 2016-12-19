import {Component, OnInit} from '@angular/core';
import {FairviewTag, tagType} from "./fairviewTag";
import {TagsService} from "./tags.service";


@Component({
  moduleId: module.id,
  selector: 'tags-component',
   templateUrl: 'tags.component.html',
})

export class TagsComponent implements OnInit {
  constructor(
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    this.tagsService.getTags().then((tags) => this.tags = tags);
  }

  tags: FairviewTag[];
  newTag: FairviewTag;
}