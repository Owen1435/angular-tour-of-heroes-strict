import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JiraHomePageSmartComponent} from "./components/jira-home-page/jira-home-page-smart.component";

const routes: Routes = [
  {
    path: 'jira',
    component: JiraHomePageSmartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JiraRoutingModule { }
