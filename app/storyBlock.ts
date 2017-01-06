export class storyBlock {
  constructor(
    id: number,
    title:  string,
    summary: string,
    description: string,
  ) {};

  id: number;
  parents: storyBlock[];
  children: storyBlock[];

  private addParent(parent: storyBlock) {
    this.parents.push(parent);
  }

  private addChild(child: storyBlock) {
    this.children.push(child);
  }

  linkEvents(other: storyBlock) {
    this.addChild(other);
    other.addParent(this);
  }
}