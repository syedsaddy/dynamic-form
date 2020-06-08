import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  field: Question;
  group: FormGroup;
  fieldLabel = null;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.fieldLabel = this.field.label.trim();
  }

  /**
   * Cancels amendment
   */
  cancelAmendment(): void {
    // this.policyService.cancelAmendment().subscribe();
  }
}
