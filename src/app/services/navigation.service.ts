import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageTemplate } from '../models/template';
import { ValidationService } from './validation.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  currentT: PageTemplate;
  constructor(private router: Router,
    private validation: ValidationService) { }

  navigateToNext(templates: Array<PageTemplate>): void {
    // templates.forEach(t => {
    //   this.validation.validateAllFormFields(t.formGroup);
    // });
    const nextRoute = templates.find(t => t.formGroup.status === 'INVALID');
    if (nextRoute) {
      this.router.navigateByUrl(nextRoute.url);
      this.currentT = nextRoute;
    } else if (!this.currentT) {
      this.router.navigateByUrl(templates[0].url);
      this.currentT = templates[0];
    } else {
      this.router.navigateByUrl(this.currentT.nextT);
      this.currentT = templates.find(t => t.name === this.currentT.nextT);
    }
  }
}
