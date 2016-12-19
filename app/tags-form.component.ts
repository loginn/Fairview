import {Component, Input, OnInit} from "@angular/core";
import {FairviewTag, tagType} from "./fairviewTag";
import { TagsService } from './tags.service';

@Component({
  moduleId: module.id,
  selector: 'tags-form',
  templateUrl: 'tags-form.component.html',
})

export class TagsFormComponent implements OnInit {
  constructor(
    private tagsService: TagsService
  ) {}
  tags: FairviewTag[];
  newTag: FairviewTag;

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    this.tagsService.getTags().then((tags) => {
      this.tags = tags;
    });
  }

  addDialogue: boolean = false;
  displayAddDialogue(): void {
    this.addDialogue = true;
    this.newTag = new FairviewTag(this.tags.length, 'Poulpe', tagType.CHARACTER);
  }

  onSubmit(): void {
    this.tags.push(this.newTag);
    this.addDialogue = false;
  }
}