import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JourneyBuilderService } from './services/journey-builder.service';
import { TemplateProviderService } from './services/template-provider.service';
import { TemplateBuilderService } from './services/template-builder.service';
import { ValidationService } from './services/validation.service';
import { QuestionBuilderService } from './services/question-builder.service';
import { QuestionProviderService } from './services/question-provider.service';
import { NavigationService } from './services/navigation.service';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicSelectComponent } from './components/dynamic select/dynamic-select.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { AppMaterialModule } from './app-material.module';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    JourneyComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    DynamicSelectComponent,
    ButtonComponent,
    InputComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [JourneyBuilderService, TemplateProviderService, TemplateBuilderService, ValidationService, QuestionBuilderService, QuestionProviderService, NavigationService],
  bootstrap: [AppComponent],
  entryComponents: [
    ButtonComponent
  ]
})
export class AppModule { }
