import {Injectable} from "@angular/core";
import {FairviewTag} from "./fairviewTag";
import {TAGS} from "./mock.tags";

@Injectable()
export class TagsService {
  getTags(): Promise<FairviewTag[]> {
    return Promise.resolve(TAGS)
  }
}