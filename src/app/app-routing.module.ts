import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { JourneyComponent } from './pages/journey/journey.component';


const routes: Routes = [
  {
    path: '', component: JourneyComponent
  },
  {
    path: 'page1', component: Page1Component
  },
  {
    path: 'page2', component: Page2Component
  },
  {
    path: 'page3', component: Page3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
