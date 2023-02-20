import { Component, Input } from '@angular/core';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  constructor() {
    this.skill = { name: '', logo: '', site: '' };
  }

  @Input() skill: Skill;

}
