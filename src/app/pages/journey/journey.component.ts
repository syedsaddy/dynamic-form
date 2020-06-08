import { Component, OnInit } from '@angular/core';
import { JourneyBuilderService } from 'src/app/services/journey-builder.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  journeyId = 'v1';
  constructor(private journeyBuilder: JourneyBuilderService) { }

  ngOnInit(): void {
  }

  loadJourney(): void {
    this.journeyBuilder.buildJourneyAndRedirect(this.journeyId);
  }

}
