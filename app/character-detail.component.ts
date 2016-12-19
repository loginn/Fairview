import {Component} from "@angular/core";
import {Character} from "./character";

@Component({
  moduleId: module.id,
  selector: 'character-detail',
  templateUrl: 'character-detail.component.html'
})

export class CharacterDetailComponent {
  character: Character = new Character(0, 'Paul', 'Blond', []);
}