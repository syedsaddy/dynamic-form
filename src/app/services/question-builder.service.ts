import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionBuilderService {
  getAllQuetions(): { [key: string]: Question; } {

    return {
      firstName: {
        name: 'firstName',
        label: 'What is the first name?',
        type: 'input',
        validations: [{
          name: 'required',
          validator: Validators.required,
          message: 'First name required'
        }]
      },
      lastName: {
        name: 'lastName',
        label: 'What is the last name?',
        type: 'input',
        validations: [{
          name: 'required',
          validator: Validators.required,
          message: 'Last name required'
        }]
      },
      ssn: {
        name: 'ssn',
        label: 'What is the ssn?',
        type: 'input',
        validations: [{
          name: 'required',
          validator: Validators.required,
          message: 'SSN required'
        }]
      },
      dob: {
        name: 'dob',
        label: 'Date of birth',
        type: 'input',
        validations: [{
          name: 'required',
          validator: Validators.required,
          message: 'DOB required'
        }]
      },
      address: {
        name: 'address',
        label: 'Address',
        type: 'input',
        validations: [{
          name: 'required',
          validator: Validators.required,
          message: 'Address required'
        },]
      },
      state: {
        name: 'state',
        label: 'State',
        type: 'select',
        validations: [{
          name: 'required',
          validator: Validators.required,
          message: 'state required'
        }]
      },
      button: {
        name: 'button',
        type: 'button',
        label: 'Continue'
      },
      helpText1: {
        name: 'helpText',
        label: '<div><h1>This is help V1</h1><p> only for the journey v1</p1></div>',
        type: 'info',
        validations: [],
        cssClasses: ['blueColor']
      },
      helpText2: {
        name: 'helpText',
        label: '<div><h1>This is help V2</h1><p> only for the journey v2</p1></div>',
        type: 'info',
        validations: [],
        cssClasses: ['redColor']
      },
    };
  }
}
