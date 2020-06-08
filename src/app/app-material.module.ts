import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  imports: [
    CommonModule,



    MatRippleModule,

  ],
  exports: [
    CommonModule,
    MatSelectModule,
    MatRippleModule,
    MatSliderModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: {
        animation: {
          enterDuration: 300,
          exitDuration: 500
        }
      }
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline'
      }
    }
  ]
})
export class AppMaterialModule { }
