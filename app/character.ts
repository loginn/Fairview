import {FairviewTag} from "./tags/fairviewTag";

export class Character {
  constructor (
    public id: number,
    public name: string,
    public description: string,
    public tags: FairviewTag[]
  ) {}
}