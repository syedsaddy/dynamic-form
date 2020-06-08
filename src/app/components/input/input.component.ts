import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  field: Question;
  group: FormGroup;
  fields: Question[];
  isEmitEligible: boolean;

  ngOnInit() {
    if (this.field.isDependency) {
      this.isEmitEligible = true;
    }
    // const ctrl = this.group.get(this.field.name);
    //  this.group.setControl(this.field.name, new FormControl(ctrl.value, { validators: ctrl.validator, updateOn: 'change' }));
  }

  /**
   * Triggers dependency
   * @param event the which will cause the trigger
   */
  triggerDependency(event: any): void {
    if (this.isEmitEligible) {
      // const svc = this.field.dependencyService;
      // svc.service[svc.qName](this.fields, event.target.value, this.group);
    }

    const ctrl = this.group.get(this.field.name);
    if (ctrl.updateOn !== 'change') {
      this.group.setControl(this.field.name, new FormControl(ctrl.value, { validators: ctrl.validator, updateOn: 'change' }));
      this.group.get(this.field.name).markAsTouched();
      this.group.get(this.field.name).updateValueAndValidity();
    }
  }
}
