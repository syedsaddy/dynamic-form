import { Injectable } from '@angular/core';
import { PageTemplate } from '../models/template';
import { QuestionProviderService } from './question-provider.service';
import { Question } from '../models/question';
import { FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import { TemplateBuilderService } from './template-builder.service';
import { NavigationService } from './navigation.service';
import { FormPatchingService } from './form-patching.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateProviderService {
  templates: Array<PageTemplate>;

  constructor(
    private templateBuilder: TemplateBuilderService,
    private questionProvider: QuestionProviderService,
    private fb: FormBuilder,
    private formPatching: FormPatchingService) { }
  getTemplates(journeyId: string): Array<PageTemplate> {
    switch (journeyId) {
      case 'v1':
        return this.getTemplatesForJourney1();
      case 'v2':
        return this.getTemplatesForJourney2();
      default:
        break;
    }
  }

  getTemplatesForJourney1(): Array<PageTemplate> {
    this.templates = this.templateBuilder.getTemplatesForV1();
    this.templates.forEach(t => {
      t.questions = this.questionProvider.getQuestionsByPage(t.name, 'v1');
      t.url = t.name;
      t.formGroup = this.buildForm(t.questions);
      //t.formGroup.patchValue(this.formPatching.sampleData());
    });
    return this.templates;
  }

  getTemplatesForJourney2(): Array<PageTemplate> {
    this.templates = this.templateBuilder.getTemplatesForV2();
    this.templates.forEach(t => {
      t.questions = this.questionProvider.getQuestionsByPage(t.name, 'v2');
      t.url = t.name;
      t.formGroup = this.buildForm(t.questions);
      //t.formGroup.patchValue(this.formPatching.sampleData());
    });
    return this.templates;
  }
  buildForm(questions: Question[]): FormGroup {
    let quesKeys = {};
    const ctrls = new Array<FormControl>();
    questions.forEach(question => {
      const ctrl = new FormControl();
      if (question.validations) {
        let validators = [];
        question.validations.forEach(v => {
          validators.push(v.validator);
        })
        ctrl.setValidators(validators);
      }
      ctrl.setValue(question.value);
      const nm = question.name;
      quesKeys = Object.assign(quesKeys, { [nm]: ctrl });
    });
    return this.fb.group(quesKeys);
  }
}
