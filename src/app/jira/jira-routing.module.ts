import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JiraHomePageComponent} from "./components/jira-home-page/jira-home-page.component";

const routes: Routes = [
  {
    path: 'jira',
    component: JiraHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JiraRoutingModule { }
