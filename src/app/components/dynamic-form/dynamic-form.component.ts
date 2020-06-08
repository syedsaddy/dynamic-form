import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question';

@Component({
  exportAs: 'appDynamicForm',
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnChanges, OnInit {

  @Input() fields: Question[] = [];
  @Input() updateOn: string;
  @Input() newForm: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  submitted: boolean;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  get value() {
    return this.form.value;
  }

  get controls() { return this.fields.filter(({ type }) => type !== 'button'); }

  ngOnInit() {
    this.form = this.newForm // this.createGroup();
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map(item => item.name);

      controls
        .filter(control => !configControls.includes(control))
        .forEach(control => this.form.removeControl(control));

      configControls
        .filter(control => !controls.includes(control))
        .forEach((name) => {
          const config = this.fields.find(control => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });

    }
  }

  /**
   * Determines whether field is an array
   * @param field
   * @returns
   */
  isFieldArray(field) {
    return field instanceof Array;
  }

  /**
   * Determines when form is submitted
   * @param event the value of the form
   */
  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
      console.log(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  /**
   * Creates group
   * @returns the form group object
   */
  createGroup() {
    let group = this.fb.group({});
    if (this.updateOn) {
      group = this.fb.group({}, { updateOn: this.updateOn });
    }
    this.controls.forEach(control => {
      if (control instanceof Array) {
        control.forEach(ctrl => group.addControl(ctrl.name, this.createControl(ctrl)))
      } else {
        group.addControl(control.name, this.createControl(control))
      }
    });
    return group;
  }

  /**
   * Creates control
   * @param config question object
   * @returns the abstract control
   */
  createControl(config: Question) {
    const { disabled, value } = config;
    return this.fb.control({ disabled, value },
      this.bindValidations(config.validations));
  }

  /**
   * Binds validations
   * @param validations the validation object
   * @returns validationFn
   */
  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach((valid) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  /**
   * Validates all form fields
   * @param formGroup the form group object
   */
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
