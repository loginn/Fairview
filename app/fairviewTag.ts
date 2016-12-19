export enum tagType {
  CHARACTER = 0,
  EVENT = 1
}

export class FairviewTag {
  constructor (
    public id: number,
    public name: string,
    public type: tagType,
  ) {}
}