import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { DynamicSelectComponent } from '../dynamic select/dynamic-select.component';
import { Question } from 'src/app/models/question';
import { InfoComponent } from '../info/info.component';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: DynamicSelectComponent,
  info: InfoComponent,
};
@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() field: Question;
  @Input() fields: Question[];
  @Input() group: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    const instance = this.componentRef.instance;
    instance.field = this.field;
    instance.fields = this.fields;
    instance.group = this.group;
  }
}
