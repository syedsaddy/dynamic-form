import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  field: Question;
  group: FormGroup;
  fields: Question[];
  isEmitEligible: boolean;


}
