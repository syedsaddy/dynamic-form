import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Validators } from '@angular/forms';
import { QuestionBuilderService } from './question-builder.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionProviderService {
  private questions: { [key: string]: Question; };
  constructor(private questionBuilder: QuestionBuilderService) {
    this.questions = questionBuilder.getAllQuetions();
  }

  getQuestionsByPage(pageId: string, journeyId: string): Question[] {
    let questions = new Array<Question>();
    switch (pageId) {
      case 'page1':
        return this.getPage1Questions(journeyId);
      case 'page2':
        return this.getPage2Questions(journeyId);
      default:
        break;
    }
    return questions;
  }

  private getPage1Questions(journeyId: string): Question[] {
    switch (journeyId) {
      case 'v1':
        return [this.questions.helpText1, this.questions.firstName, this.questions.lastName, this.questions.address, this.questions.button];
      case 'v2':
        return [this.questions.firstName, this.questions.address, this.questions.helpText2, this.questions.button];
    }
  }

  private getPage2Questions(journeyId: string): Question[] {
    switch (journeyId) {
      case 'v1':
        return [this.questions.ssn, this.questions.button];
      case 'v2':
        return [this.questions.firstName, this.questions.lastName, this.questions.button];
    }
  }
}
