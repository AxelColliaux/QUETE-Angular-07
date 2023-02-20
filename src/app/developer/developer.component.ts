import { Component } from '@angular/core';
import { Developer } from '../model/developer.model';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  developer: Developer = new Developer('Williams', 'Ellie', 23, 'Feminin', 'Ellie grew up as an orphan in the Boston quarantine zone and attended a military preparatory school, where she met and befriended Riley Abel.[...]', [
    new Skill('JavaScript', 'javascript.png', 'ellie-williams.com'),
    new Skill('PHP', 'php.png', 'ellie-williams.com')]);

}
