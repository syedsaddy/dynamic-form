import { Question } from './question';
import { FormGroup } from '@angular/forms';

export class PageTemplate {
  url?: string;
  questions?: Array<Question>;
  formGroup?: FormGroup;
  previousT?: string;
  nextT?: string;
  cssClass?: string;
  constructor(public name: string, public title: string) {

  }
}
