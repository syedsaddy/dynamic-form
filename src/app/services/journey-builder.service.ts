import { Injectable } from '@angular/core';
import { PageTemplate } from '../models/template';
import { NavigationService } from './navigation.service';
import { TemplateProviderService } from './template-provider.service';

@Injectable({
  providedIn: 'root'
})
export class JourneyBuilderService {
  templates: Array<PageTemplate>;

  constructor(
    private templateProvider: TemplateProviderService,
    private navigation: NavigationService) { }

  buildJourneyAndRedirect(journeyId: string): void {
    switch (journeyId) {
      case 'v1':
        this.getJourneyForV1();
        this.navigation.navigateToNext(this.templates);
        break;
      case 'v2':
        this.getJourneyForV2();
        this.navigation.navigateToNext(this.templates);
        break;
      default:
        break;
    }
  }

  private getJourneyForV1(): void {
    this.templates = this.templateProvider.getTemplates('v1');
  }

  private getJourneyForV2(): void {
    this.templates = this.templateProvider.getTemplates('v2');
  }
}
