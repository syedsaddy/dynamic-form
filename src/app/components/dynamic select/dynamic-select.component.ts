import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html'
})
export class DynamicSelectComponent implements OnInit {
  @Input() field?: Question;
  @Input() fields?: Question[];
  @Input() group?: FormGroup;
  isEmitEligible: boolean;

  ngOnInit() {
    if (this.field.isDependency) {
      this.isEmitEligible = true;
    }
  }

  /**
   * Triggers dependency
   * @param value control's value
   */
  triggerDependency(value: any): void {
    if (this.isEmitEligible) {
      // const dependencyService = this.field.dependencyService;
      //  dependencyService.service[dependencyService.qName](this.fields, value, this.group);
    }
  }
}
