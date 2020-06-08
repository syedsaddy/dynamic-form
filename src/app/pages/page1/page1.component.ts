import { Component, OnInit } from '@angular/core';
import { PageTemplate } from 'src/app/models/template';
import { Question } from 'src/app/models/question';
import { NavigationService } from 'src/app/services/navigation.service';
import { JourneyBuilderService } from 'src/app/services/journey-builder.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
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
