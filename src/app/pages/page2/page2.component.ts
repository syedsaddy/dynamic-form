import { Component, OnInit } from '@angular/core';
import { PageTemplate } from 'src/app/models/template';
import { Question } from 'src/app/models/question';
import { NavigationService } from 'src/app/services/navigation.service';
import { JourneyBuilderService } from 'src/app/services/journey-builder.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html'
})
export class Page2Component implements OnInit {
  pageTemplate: PageTemplate;
  regConfig: Question[];
  constructor(
    private navigation: NavigationService,
    private journeyBuilder: JourneyBuilderService) { }

  ngOnInit(): void {
    this.pageTemplate = this.navigation.currentT;
    this.regConfig = this.pageTemplate.questions;
  }

  submit(formVal: any): void {
    console.log(formVal);
    this.navigation.navigateToNext(this.journeyBuilder.templates);
  }

}
