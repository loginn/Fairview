import {Injectable} from "@angular/core";
import {FairviewTag} from "./fairviewTag";
import {TAGS} from "./mock.tag";

@Injectable()
export class TagService {
  getTags(): Promise<FairviewTag[]> {
    return Promise.resolve(TAGS)
  }
}