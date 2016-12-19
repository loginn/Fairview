import {Component, Input, OnInit} from "@angular/core";
import {FairviewTag, tagType} from "./fairviewTag";
import { TagService } from './tag.service';

@Component({
  moduleId: module.id,
  selector: 'tag-form',
  templateUrl: 'tag-form.component.html',
})

export class TagFormComponent implements OnInit {
  constructor(
    private tagsService: TagService
  ) {}
  @Input()
  localTags: FairviewTag[]; // comes from the event or the character-detail
  globalTags: FairviewTag[]; // this is the global Tag List
  newTag: FairviewTag;

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    this.tagsService.getTags().then((tags) => {
      this.globalTags = tags;
    });
  }

  addDialogue: boolean = false;
  displayAddDialogue(): void {
    this.addDialogue = true;
    this.newTag = new FairviewTag(this.globalTags.length, '', tagType.CHARACTER);
  }

  onSubmit(): void {
    // adding the new tag to both the event or character-detail and the global tag list
    this.globalTags.push(this.newTag);
    this.localTags.push(this.newTag);
    this.addDialogue = false;
  }
}