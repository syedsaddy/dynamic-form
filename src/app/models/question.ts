import { KeyValue } from '@angular/common';
import { ValidatorFn } from '@angular/forms';

export class Question {
  name: string;
  label: string;
  type: string;
  options?: KeyValue<string, string>[];
  validations?: Validator[];
  defaultValue?: string;
  value?: any;
  isDependency?: boolean;
  dependentQuestions?: string[];
  disabled?: boolean;
  cssClasses?: string[];
}

export interface Validator {
  name: string;
  validator: any;
  message: string;
}
