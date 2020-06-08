import { Injectable } from '@angular/core';
import { PageTemplate } from '../models/template';

@Injectable({
  providedIn: 'root'
})
export class TemplateBuilderService {
  getTemplatesForV1(): PageTemplate[] {
    var templates: Array<PageTemplate> = [];
    const t1 = new PageTemplate('page1', 'This is page1');
    t1.cssClass = 'blueTheme';
    t1.nextT = 'page2';
    t1.previousT = 'journey';
    templates.push(t1);
    const t2 = new PageTemplate('page2', 'This is page2')
    t2.nextT = 'page3';
    t2.previousT = 'page1';
    templates.push(t2);
    const t3 = new PageTemplate('page3', 'This is page3')
    t3.nextT = 'page3';
    t3.previousT = 'page2';
    templates.push(t3);
    return templates;
  }

  getTemplatesForV2(): PageTemplate[] {
    var templates: Array<PageTemplate> = [];
    const t1 = new PageTemplate('page2', 'This is page2')
    t1.nextT = 'page1';
    t1.previousT = 'journey';
    templates.push(t1);
    const t2 = new PageTemplate('page1', 'This is page1');
    t2.cssClass = 'greenTheme';
    t2.nextT = 'page3';
    t2.previousT = 'page2';
    templates.push(t2);
    const t3 = new PageTemplate('page3', 'This is page3')
    t3.nextT = 'page3';
    t3.previousT = 'page1';
    templates.push(t3);
    return templates;
  }
}
